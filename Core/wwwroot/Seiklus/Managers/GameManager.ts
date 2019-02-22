import * as Phaser from 'phaser';

export class GameManager
{
    /** RootUrl for resources of game. */
    private static RootUrl: string;
    
    /** Current Phaser program. */
    private static Application: Phaser.Game;
    
    public static Launch(url :string) :void
    {
        this.SetupUrl(url);
        
        if (this.Application != null) {
            this.Application.destroy(true);
            this.Application = null;
        }
        
        this.Application = new Phaser.Game({
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            
            physics: {
                default: 'arcade'
            },
            
            scene: {
                preload: this.OnPreload,
                create:  this.OnApplicationReady
            }
            
        });
    }
    
    private static SetupUrl(url: string): void {
        this.RootUrl = url.substring(0, url.lastIndexOf('/') + 1);
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