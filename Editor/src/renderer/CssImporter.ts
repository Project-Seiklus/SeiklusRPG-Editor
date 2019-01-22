export enum RootType {
    Root,
    Assets,
    NodeModules,
    VueMaterial
}

export default function loader(src:string, rootType:RootType = RootType.Assets): HTMLLinkElement {
    
    let element:HTMLLinkElement = document.createElement('link');
    
    let path:string = src;
    
    switch (rootType) {
        
        case RootType.Assets:      path = `./assets/css/${src}`;                     break;
        
        case RootType.NodeModules: path = `./node_modules/${src}`;                   break;
        
        case RootType.VueMaterial: path = `./node_modules/vue-material/dist/${src}`; break;
    }
    
    element.setAttribute('rel', "stylesheet");
    
    element.setAttribute('href', path);
    
    document.head.appendChild(element);
    
    return element;
}