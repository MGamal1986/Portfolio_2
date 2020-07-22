// import sliding section component
import {
    Sliding
} from './slidingSection';

// sliding for home section
// select home elements
const contactSection = document.querySelector('.contact-section');
const contactBtn = document.querySelector('.sections.contact');

// select all main sections
const mainSections = document.querySelectorAll('.section');

// select all sections buttons
const sectionsBtn = document.querySelectorAll('.sections');




// export main home function
export default function Home() {
    let screenSize = window.innerWidth;
    if (screenSize <= 768) {
        // create instance of sliding class
        let contactSider = new Sliding(contactBtn, contactSection, 'slide', mainSections, sectionsBtn, {
            scroll: true
        });

        // call slide function
        contactSider.slide();

    } else {
        // create instance of sliding class
        let contactSider = new Sliding(contactBtn, contactSection, 'slide', mainSections, sectionsBtn);

        // call slide function
        contactSider.slide();
    }

}