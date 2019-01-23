export default function(rendererPath:string) {
    
    if (rendererPath == undefined ||
        rendererPath == null ||
        rendererPath == '')
        throw new Error("렌더러의 경로를 확인할 수 없습니다.");
    
    let loadedPackage = require(rendererPath);
    
    if (loadedPackage.default == null)
        throw new Error(`(${rendererPath}) 렌더러를 불러오지 못했습니다.`);
    
    loadedPackage.default();
    
    document.body.style.display = 'none';
    
    let preventOnLoad:Function = document.body.onload;
    
    function OnLoad(args:Event) {
        
        if (preventOnLoad != null)
            preventOnLoad(args);
        
        document.body.style.display = '';
        document.body.onload = null;
    }
    
    document.body.onload = OnLoad;
}