export function Scroll(_sections, _elements) {

    window.addEventListener('scroll', (event) => {

        const [home, about, portfolio, contact] = _sections;
        const [homeBtn, aboutBtn, portfolioBtn, contactBtn] = _elements;
        let sectionArray = [home.offsetTop, about.offsetTop, portfolio.offsetTop, contact.offsetTop].map((section) => {
            return (section -= 200);
        });

        if (window.scrollY >= sectionArray[0] && window.scrollY < sectionArray[1] && window.scrollY < sectionArray[2] && window.scrollY < sectionArray[3]) {
            _elements.forEach((el) => {
                el.classList.remove('slide');
            })
            homeBtn.classList.add('slide');
        } else if (window.scrollY > sectionArray[0] && window.scrollY > sectionArray[1] && window.scrollY < sectionArray[2] && window.scrollY < sectionArray[3]) {
            _elements.forEach((el) => {
                el.classList.remove('slide');
            })
            aboutBtn.classList.add('slide');
        } else if (window.scrollY > sectionArray[0] && window.scrollY > sectionArray[1] && window.scrollY > sectionArray[2] && window.scrollY < sectionArray[3]) {
            _elements.forEach((el) => {
                el.classList.remove('slide');
            })
            portfolioBtn.classList.add('slide');
        } else if (window.scrollY > sectionArray[0] && window.scrollY > sectionArray[1] && window.scrollY > sectionArray[2] && window.scrollY > sectionArray[3]) {
            _elements.forEach((el) => {
                el.classList.remove('slide');
            })
            contactBtn.classList.add('slide');
        }
    })
}