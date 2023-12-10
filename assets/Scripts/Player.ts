import { _decorator, Component, Input, input, EventKeyboard, KeyCode, RigidBody2D, DistanceJoint2D, CircleCollider2D} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property({
        type: RigidBody2D
    })
    public anchor: RigidBody2D;

    private rigidBody: RigidBody2D;
    private distanceJoint: DistanceJoint2D;
    private circleCollider: CircleCollider2D;
    
    onLoad() {
        this.rigidBody = this.getComponent(RigidBody2D);
        this.circleCollider = this.getComponent(CircleCollider2D);
        this.distanceJoint = this.getComponent(DistanceJoint2D);
        
        input.on(Input.EventType.KEY_UP,this.KeyUp,this);
        input.on(Input.EventType.KEY_DOWN,this.KeyDown,this);
    }

    KeyDown(event:EventKeyboard)
    {
        switch(event.keyCode)
        {
            case KeyCode.SPACE:
                this.HookIn();
                break;
        }
    }

    KeyUp(event:EventKeyboard)
    {
        switch(event.keyCode)
        {
            case KeyCode.SPACE:
                this.ReleaseHook();
                break;
        }
    }

    HookIn()
    {
        if(this.anchor != null)
        {
            this.distanceJoint.connectedBody = this.anchor;
            this.distanceJoint.enabled = true;
        }
    }

    ReleaseHook()
    {
        this.distanceJoint.connectedBody = null;
        this.distanceJoint.enabled = false;
    }
}