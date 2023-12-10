import { _decorator, Component, Input, input, EventKeyboard, KeyCode, RigidBody2D, DistanceJoint2D, CircleCollider2D, Node, Vec3, Vec2, Quat, misc, EventTouch} from 'cc';
const { ccclass, property } = _decorator;

enum PlayerState{
    idle,
    Swinging,
  }
@ccclass('Player')
export class Player extends Component {
    
    @property({
        type: Node
    })
    private rope: Node;

    public anchor: RigidBody2D;
    public rigidBody: RigidBody2D;

    private distanceJoint: DistanceJoint2D;
    private circleCollider: CircleCollider2D;
    private playerState: PlayerState = PlayerState.idle;
    private crntAnchor: Node;

    onLoad() {
        this.rigidBody = this.getComponent(RigidBody2D);
        this.circleCollider = this.getComponent(CircleCollider2D);
        this.distanceJoint = this.getComponent(DistanceJoint2D);
        
        input.on(Input.EventType.TOUCH_START,this.TouchStart,this);
        input.on(Input.EventType.TOUCH_END,this.TouchEnd,this);
        
    }

    update(dt: number){

        if(this.playerState == PlayerState.Swinging)
        {
            //this.SwingRope(dt);
        } 

    }

    TouchStart(event:EventTouch)
    {
        this.HookIn();
    }

    TouchEnd(event:EventTouch)
    {
        this.ReleaseHook();
    }

    HookIn()
    {
        if(this.anchor != null)
        {
            this.crntAnchor = this.anchor.node;
            this.distanceJoint.connectedBody = this.anchor;
            this.distanceJoint.enabled = true;
            this.playerState = PlayerState.Swinging;
        }
    }

    SwingRope(dt: number)
    {
        this.rope.position = this.crntAnchor.position.add(this.node.position).divide3f(2,2,2);
        console.log(Vec3.dot(this.crntAnchor.position.normalize(),this.node.position.normalize()));
        //this.rope.setRotationFromEuler(new Vec3(0,0,misc.radiansToDegrees(Vec2.angle(this.crntAnchor.getPosition(),this.node.getPosition()))));
        //console.log(misc.radiansToDegrees(Vec2.angle(this.node.getPosition(),this.crntAnchor.getPosition())));
    }

    ReleaseHook()
    {
        this.crntAnchor = null;
        this.distanceJoint.connectedBody = null;
        this.distanceJoint.enabled = false;
        this.playerState = PlayerState.idle;
    }
}