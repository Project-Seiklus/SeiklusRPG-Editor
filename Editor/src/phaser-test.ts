import * as Phaser from "phaser";

export class Test {
    public static Init():void
    {
        let conf = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            scene: {
                preload: Test.Preload,
                create: Test.Create,
                update: Test.Update
            }
        };
        
        let game = new Phaser.Game(conf);
    }
    
    public static Preload():void
    {
        
    }
    
    public static Create():void
    {
        
    }
    
    public static Update():void
    {
        
    }
}