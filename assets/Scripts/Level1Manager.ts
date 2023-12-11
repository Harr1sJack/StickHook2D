import { _decorator,  Component, Node , UITransform, find, BoxCollider2D, Contact2DType, Collider2D, IPhysics2DContact, ERigidBody2DType, director} from 'cc';
import { GameManager } from './GameManager';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('Level1Manager')
export class Level1Manager extends Component {
    @property({
        type: BoxCollider2D
    })
    private finishCollider:BoxCollider2D;

    @property({
        type: BoxCollider2D
    })
    private boundaryCollider:BoxCollider2D;
    
    @property({
        type: Node
    })
    private youWon:Node;
    
    @property({
        type: Node
    })
    private gameOver:Node;

    @property({
        type: Player
    })
    private player:Player;

    onLoad() {
        this.boundaryCollider.on(Contact2DType.END_CONTACT, this.onEndContact, this);

        this.finishCollider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        GameManager.instance.SetBG();
        this.SetBoundary();
    }

    SetBoundary()
    {
        const canvas:UITransform = find("Canvas").getComponent(UITransform);
        this.boundaryCollider.size.x = canvas.contentSize.x;
        this.boundaryCollider.size.y = canvas.contentSize.y;
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null)
    {
        if(otherCollider.node.getComponent(Player))
        {
            this.Won();
        }
    }

    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null)
    {
        if(otherCollider.getComponent(Player))
        {
            this.GameOver();
        }
    }

    Won()
    {
        console.log("Won");
        this.youWon.active = true;
    }

    GameOver()
    {
        console.log("GameOver");
        this.gameOver.active = true;
    }

    Restart()
    {
        director.loadScene("Level1");
    }
}


