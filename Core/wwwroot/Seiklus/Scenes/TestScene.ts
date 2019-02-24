import * as Phaser from 'phaser';

export class TestScene extends Phaser.Scene
{
    constructor() {
        super({
            key: "TestScene"
        });
    }
    
    preload(): void {
        
        this.load.setPath("data");
        this.load.image("sample");
        
    }
    
    create(): void {
        this.add.image(400, 300, "sample");
    }
}