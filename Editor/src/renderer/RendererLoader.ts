export default function(defaultLoader:NodeRequire) {
    document.body.style.display = 'none';
    
    //TODO : 로더 작업
    
    //defaultLoader.
    
    let preventOnLoad = document.body.onload;
    document.body.onload = function() {
        preventOnLoad.call(this);
        document.body.style.display = '';
        document.body.onload = null;
    }
}
