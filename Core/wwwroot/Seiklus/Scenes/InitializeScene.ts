import * as Phaser from 'phaser';
import { GameManager } from '../Managers/GameManager';

/** This scene loads common resources of game. */
export class InitializeScene extends Phaser.Scene
{
    constructor() {
        super({
            key: "InitializeScene"
        });
    }
    
    preload() :void {
        
        //TODO : load resources json
        //TODO : need user defined loading dialog preset in Seiklus editor.
        
    }
    
    update() :void {
        this.scene.start("TitleScreen");
    }
}