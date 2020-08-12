export function Scroll(_sections, _elements) {

    window.addEventListener('scroll', (event) => {
        // array destructing for main sections and sections buttons
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
            _sections.forEach((sec) => {
                sec.classList.remove('slide')
            })
            home.classList.add('slide')
        } else if (window.scrollY > sectionArray[0] && window.scrollY > sectionArray[1] && window.scrollY < sectionArray[2] && window.scrollY < sectionArray[3]) {
            _elements.forEach((el) => {
                el.classList.remove('slide');
            })
            aboutBtn.classList.add('slide');
            _sections.forEach((sec) => {
                sec.classList.remove('slide')
            })
            about.classList.add('slide')

        } else if (window.scrollY > sectionArray[0] && window.scrollY > sectionArray[1] && window.scrollY > sectionArray[2] && window.scrollY < sectionArray[3]) {
            _elements.forEach((el) => {
                el.classList.remove('slide');
            })
            portfolioBtn.classList.add('slide');
            _sections.forEach((sec) => {
                sec.classList.remove('slide')
            })
            portfolio.classList.add('slide')
        } else if (window.scrollY > sectionArray[0] && window.scrollY > sectionArray[1] && window.scrollY > sectionArray[2] && window.scrollY > sectionArray[3]) {
            _elements.forEach((el) => {
                el.classList.remove('slide');
            })
            contactBtn.classList.add('slide');
            _sections.forEach((sec) => {
                sec.classList.remove('slide')
            })
            contact.classList.add('slide')
        }
    })
}