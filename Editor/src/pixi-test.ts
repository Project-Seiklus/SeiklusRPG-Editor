import * as PIXI from "pixi.js";

export class Test {
    static View : PIXI.WebGLRenderer;
    static Stage : PIXI.Container;
    
    static Shape : PIXI.Graphics;
    
    public static Init():void {
        
        window.onresize = Test.OnResize;
        
        let option = {
            backgroundColor: 0x0099ff,
            resolution: devicePixelRatio,
            antialias: true,
            width:1280,
            height:720
        };
        
        Test.View = new PIXI.WebGLRenderer(option);
        
        Test.View.autoResize = true;
        Test.View.view.style.width  = "100%";
        Test.View.view.style.height = "100vh";
        
        document.body.appendChild(Test.View.view);
        
        Test.Stage = new PIXI.Container();
        
        Test.Shape = new PIXI.Graphics();
        
        Test.Shape.beginFill(0xffffff);
        Test.Shape.drawRect(0, 0, 100, 100);
        Test.Shape.endFill();
        
        Test.Stage.addChild(Test.Shape);
        
        Test.Shape.x = 100;
        Test.Shape.y = 100;
        
        Test.View.render(Test.Stage);
    }
    
    public static OnResize():void {
        if (Test.View == null)
            return;
        
        //TODO : PIXI 렌더러의 크기가 창 크기에 맞게 동적으로 바뀌어야 함.
        //       창 크기에 맞게 똑같이 커지고 작아지는 것을 볼 수 있음.
    }
}