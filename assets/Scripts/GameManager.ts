import { _decorator, Component, Director, director, find, game, Game, Sprite, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    public static instance: GameManager = null;
    
    private BG:Sprite;

    onLoad() {

        //singleton that manages game across scenes
        if(GameManager.instance == null)
        {
            GameManager.instance = this;
        }
        else
        {
            this.node.destroy();
        }
        director.addPersistRootNode(GameManager.instance.node);
        this.SetBG();
    }

    Play()
    {
        director.loadScene("Level1");
    }

    SetBG()
    {
        // setting up background to match the screen resolution
        this.BG = find("Canvas/BG").getComponent(Sprite);
        const canvas:UITransform = find("Canvas").getComponent(UITransform);

        this.BG.getComponent(UITransform).contentSize.set(canvas.contentSize.x,canvas.contentSize.y);
    }
}


