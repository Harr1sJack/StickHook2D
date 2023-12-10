import { _decorator, BoxCollider2D, Component, Contact2DType, Collider2D, RigidBody2D ,IPhysics2DContact,Node} from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('Anchor')
export class Anchor extends Component {

    @property({
        type: Node
    })
    private target: Node;

    private boxCollider: BoxCollider2D;

    onLoad() {
        this.boxCollider = this.getComponent(BoxCollider2D);

        this.boxCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        this.boxCollider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null)
    {
        if(otherCollider.node.getComponent(Player))
        {
            otherCollider.node.getComponent(Player).anchor = this.getComponent(RigidBody2D);
            this.target.position = selfCollider.node.position;
            this.target.active = true;
            console.log(this.node.name + "enter");
        }
    }

    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null)
    {
        if(otherCollider.node.getComponent(Player))
        {
            const player:Player = otherCollider.node.getComponent(Player);
            if(player.anchor == this.getComponent(RigidBody2D))
            {
                player.anchor = null;
                this.target.active = false;
                console.log(this.node.name + "exit");
            }
        }
    }
}