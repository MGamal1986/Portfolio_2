export default class SideBar{
    constructor(_element,_nav,_classNav,_classElement){
        this.element = _element;
        this.nav = _nav;
        this.class = _classNav;
        this.classElement = _classElement;
    }
    show(){
        this.element.addEventListener('click',(event)=>{
            this.nav.classList.toggle(this.class);
            this.element.classList.toggle(this.classElement)
        })
        
    }
    hide(){
        document.body.addEventListener('click',(event)=>{
            if(event.target.closest('.btn-sections') === null){
                this.nav.classList.add(this.class);
                this.element.classList.remove(this.classElement)
            }
        })
    }
}