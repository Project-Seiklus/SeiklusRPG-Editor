import * as PIXI from "pixi.js";

export class Test {
    static Renderer : PIXI.WebGLRenderer;
    static Stage : PIXI.Container;
    
    static Shape : PIXI.Graphics;
    
    public static Init():void {
        
        window.onresize = this.OnResize;
        
        let option = {
            backgroundColor: 0x0099ff,
            resolution: devicePixelRatio,
            antialias: true
        };
        
        this.Renderer = new PIXI.WebGLRenderer(option);
        
        this.Renderer.autoResize = true;
        this.Renderer.view.style.width  = "100%";
        this.Renderer.view.style.height = "100vh";
        
        document.body.appendChild(this.Renderer.view);
        
        this.Stage = new PIXI.Container();
        
        this.Shape = new PIXI.Graphics();
        
        this.Shape.beginFill(0xffffff);
        this.Shape.drawRect(0, 0, 100, 100);
        this.Shape.endFill();
        
        this.Stage.addChild(this.Shape);
        
        this.Shape.x = 100;
        this.Shape.y = 100;
        
        this.UpdateScreenSize(window.innerWidth, window.innerHeight);
    }
    
    static width:number;
    static height:number;
    
    public static OnResize():void {
        this.UpdateScreenSize(window.innerWidth, window.innerHeight);
    }
    
    static UpdateScreenSize(w:number, h:number):void {
        if (this.Renderer == null)
            return;
        
        this.Renderer.resize(w, h);
        
        this.Renderer.render(this.Stage);
    }
}