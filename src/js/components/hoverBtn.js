// import typedjs library
import Typed from 'typed.js';

export class HoverBtn{
    constructor(_element,_str){
        this.element = _element;
        this.options = {
            strings : [_str],
            typedspeed : -100,
            loop: false,
            loopCount: false,
            contentType: 'html'
        }
    }
     
    
    hover(){
        this.element.addEventListener('mouseover',(event)=>{
            let type = new Typed(this.element,this.options)
        })
    }
}