import { _decorator, Component, Node } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Level1Manager')
export class Level1Manager extends Component {
    onLoad() {
        GameManager.instance.SetBG();
    }
}


