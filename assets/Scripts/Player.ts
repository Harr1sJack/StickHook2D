import { _decorator, Component, Input, input, RigidBody2D, DistanceJoint2D, CircleCollider2D, Node, Vec3, Vec2, misc, EventTouch, math} from 'cc';
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

    private playerState: PlayerState = PlayerState.idle;

    public anchor: RigidBody2D;
    public rigidBody: RigidBody2D;

    private distanceJoint: DistanceJoint2D;
    private circleCollider: CircleCollider2D;

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
            this.SwingRope(dt);
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
            this.rope.active = true;
            this.crntAnchor = this.anchor.node;
            this.distanceJoint.connectedBody = this.anchor;
            this.distanceJoint.enabled = true;
            this.playerState = PlayerState.Swinging;
        }
    }

    SwingRope(dt: number)
    {
        this.rope.position = this.node.position;

        var dir:Vec3 = this.node.position.subtract(this.crntAnchor.position);
        var angleDeg:number = misc.radiansToDegrees(Math.atan2(dir.y,dir.x));

        this.rope.setRotationFromEuler(new Vec3(0,0,angleDeg + 90));
        this.rope.setScale(new Vec3(1,Vec3.len(dir)/10,0));
        this.rigidBody.applyForce(this.rigidBody.linearVelocity,new Vec2(this.node.position.x,this.node.position.y),true);
    }

    ReleaseHook()
    {
        this.rope.active = false;
        this.crntAnchor = null;
        this.distanceJoint.connectedBody = null;
        this.distanceJoint.enabled = false;
        this.playerState = PlayerState.idle;
    }
}