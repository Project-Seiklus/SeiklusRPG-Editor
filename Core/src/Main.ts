import * as Phaser from 'phaser';

export namespace SeiklusCore
{
    export class Main {
        
        private static rooturl: string;
        
        public static Launch(rooturl: string): void
        {
            Main.rooturl = rooturl;
            
            new Phaser.Game({
                type: Phaser.AUTO,
                width: 800,
                height: 600,
                
                physics: {
                    default: 'arcade'
                }
            });
        }
    }
}