import * as Phaser from 'phaser';

export namespace SeiklusCore
{
    export class Main {
        
        /** RootUrl for resources of game. */
        private static RootUrl: string;
        
        /** Current Phaser program. */
        private static Application: Phaser.Game;
        
        /**
         * Launch Seiklus core program.
         * @param url The parent path of the game's resources.
         */
        public static Launch(url :string) :void
        {
            Main.RootUrl = url.substring(0, url.lastIndexOf('/') + 1);
            
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
                },
                
                scene: {
                    preload: Main.OnPreload,
                    create: Main.OnApplicationReady
                }
                
            });
        }
        
        /**
         * Phaser's preload method. it's called before Phaser has loaded.
         */
        private static OnPreload() :void
        {
            //TODO : data에서 먼저 게임 정보를 불러온다.
        }
        
        /**
         * Phaser's create method. it's called after Phaser has loaded.
         */
        private static OnApplicationReady() :void
        {
            
        }
    }
    
    Main.Launch(window.location.href);
}