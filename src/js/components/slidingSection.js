// create sliding class
export class Sliding{
    constructor(_element, _block, _class, _block_siblings,_element_siblings,_lines){
        this.element = _element;
        this.block = _block;
        this.class = _class;
        this.block_siblings = _block_siblings;
        this.element_siblings = _element_siblings;
        this.lines = _lines;
        this.currentIndex ;
        this.prevIndexBtn ;
    }
    slide(){
        this.element.addEventListener('click',(event)=>{
            // remove class slide from all main sections
            this.block_siblings.forEach(element => {
                element.classList.remove(this.class);
            });
            // remove class slide form all button sections
            this.element_siblings.forEach((element)=>{
                element.classList.remove(this.class);
            })
            this.block.classList.toggle(this.class);
            this.element.classList.toggle(this.class);
        })
    }
}