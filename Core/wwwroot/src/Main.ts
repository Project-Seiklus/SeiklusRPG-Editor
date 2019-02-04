//import * as Phaser from 'phaser';
//
//export namespace SeiklusCore
//{
//    export class Main {
//        
//        private static rooturl: string;
//        
//        public static Launch(rooturl: string): void
//        {
//            Main.rooturl = rooturl;
//            
//            console.log(`Hello, ${this.Test()}`);
//            
//            //new Phaser.Game({
//            //    type: Phaser.AUTO,
//            //    width: 800,
//            //    height: 600,
//            //    
//            //    physics: {
//            //        default: 'arcade'
//            //    }
//            //});
//        }
//        
//        public static Test():string
//        {
//            return "Creta!";
//        }
//    }
//    
//    Main.Launch(window.location.href);
//}

import { Test2 } from './Test2';

export class Test {
    static Hello(): void
    {
        Test2.Run();
    }
}

Test.Hello();