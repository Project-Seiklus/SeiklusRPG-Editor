import * as PIXI from "pixi.js";

export class Test {
    static Renderer : PIXI.WebGLRenderer;
    static Stage : PIXI.Container;
    
    static Shape : PIXI.Graphics;
    
    public static Init():void {
        
        window.onresize = Test.OnResize;
        
        let option = {
            backgroundColor: 0x0099ff,
            resolution: devicePixelRatio,
            antialias: true
        };
        
        Test.Renderer = new PIXI.WebGLRenderer(option);
        
        Test.Renderer.autoResize = true;
        Test.Renderer.view.style.width  = "100%";
        Test.Renderer.view.style.height = "100vh";
        
        document.body.appendChild(Test.Renderer.view);
        
        Test.Stage = new PIXI.Container();
        
        Test.Shape = new PIXI.Graphics();
        
        Test.Shape.beginFill(0xffffff);
        Test.Shape.drawRect(0, 0, 100, 100);
        Test.Shape.endFill();
        
        Test.Stage.addChild(Test.Shape);
        
        Test.Shape.x = 100;
        Test.Shape.y = 100;
        
        Test.UpdateScreenSize(window.innerWidth, window.innerHeight);
    }
    
    static width:number;
    static height:number;
    
    public static OnResize():void {
        Test.UpdateScreenSize(window.innerWidth, window.innerHeight);
    }
    
    static UpdateScreenSize(w:number, h:number):void {
        if (Test.Renderer == null)
            return;
        
        Test.Renderer.resize(w, h);
        
        Test.Renderer.render(Test.Stage);
    }
}