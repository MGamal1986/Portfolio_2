// create sliding class
export class Sliding {
    constructor(_element, _block, _class, _block_siblings, _element_siblings, _options = {
        scroll: false
    }) {
        this.element = _element;
        this.block = _block;
        this.class = _class;
        this.block_siblings = _block_siblings;
        this.element_siblings = _element_siblings;
        this.currentIndex;
        this.prevIndexBtn;
        this.options = _options;
    }
    slide() {
        console.log(this.options.scroll);
        this.element.addEventListener('click', (event) => {

            if (!this.options.scroll) {
                // remove class slide from all main sections
                this.block_siblings.forEach(element => {
                    element.classList.remove(this.class);
                });
                // remove class slide form all button sections
                this.element_siblings.forEach((element) => {
                    element.classList.remove(this.class);
                })
                this.block.classList.toggle(this.class);
                this.element.classList.toggle(this.class);

            } else if (this.options.scroll) {
                // remove class slide form all button sections
                this.element_siblings.forEach((element) => {
                    element.classList.remove(this.class);
                })
                this.element.classList.toggle(this.class);
                window.scrollTo({
                    top: this.block.offsetTop,
                    left: 0,
                    behavior: 'smooth'
                })
            }


        })
    }
}