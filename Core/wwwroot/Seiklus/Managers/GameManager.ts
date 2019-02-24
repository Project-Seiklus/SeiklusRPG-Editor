import * as Phaser from 'phaser';
import { ResourceManager } from './ResourceManager';
import { InitializeScene } from '../Scenes/InitializeScene';
import { TestScene } from '../Scenes/TestScene';

export class GameManager
{
    /** For external application debug. (window.GameView) */
    public static readonly SEIKLUS :string = "Seiklus";
    
    /** For external application debug. (window.GameView) */
    public static readonly GAME_VIEW :string = "GameView";
    
    /** RootUrl for resources of game. */
    private static RootUrl :string;
    
    /** Current Phaser application of game. */
    public static get Current() :Phaser.Game { return this._Current; }
    private static _Current :Phaser.Game;
    
    /** Main interance */
    public static Launch(url :string) :void
    {
        this.SetupUrl(url);
        
        this._Current = new Phaser.Game(
            
            //TODO : 데이터 리소스 정보를 먼저 불러오고 정리해야 함.
            /** 필요 목록
             * title : 게임의 제목
             * version : Seiklus core의 버전
             * width, height : 게임의 해상도
             * 
             * input : 게임의 지원 입력
             * 
             * render : 게임이 픽셀아트인지 아닌지 구분
             */
            {
                title: "Seiklus core",
                //url: nothing,
                version: "0.1b",
                
                type: Phaser.AUTO,
                
                width: 800,
                height: 600,
                zoom: 1,
                
                parent: "game",
                
                scene: [ TestScene ], //[ InitializeScene ]
                
                input: {
                    keyboard: true,
                    mouse: false,
                    touch: false,
                    gamepad: false
                },
                
                physics: {
                    default: 'arcade'
                    
                    //gravity: { y: 300 },
                    //debug: false
                },
                
                backgroundColor: "#000",
                
                render: { pixelArt: true, antialias: false }
            }
        );
        
        if (window[GameManager.SEIKLUS] != null)
            delete window[GameManager.SEIKLUS];
        
        window[GameManager.SEIKLUS] = {
            [GameManager.GAME_VIEW]: this._Current
        };
    }
    
    private static SetupUrl(url: string): void {
        this.RootUrl = url.substring(0, url.lastIndexOf('/') + 1);
    }
}