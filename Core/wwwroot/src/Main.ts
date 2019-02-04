import * as Phaser from 'phaser';

export namespace SeiklusCore
{
    export class Main {
        
        private static RootUrl: string;
        
        private static Application: Phaser.Game;
        
        public static Launch(url: string): void
        {
            Main.RootUrl = url;
            
            //현재 실행하고 있는 프로그램 종료
            if (Main.Application != null) {
                Main.Application.destroy(true);
                Main.Application = null;
            }
            
            Main.Application = new Phaser.Game({
                type: Phaser.AUTO,
                width: 800,
                height: 600,
                
                physics: {
                    default: 'arcade'
                }
            });
        }
    }
    
    Main.Launch(window.location.href);
}