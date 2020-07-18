// import sliding section component
import {Sliding} from './slidingSection';

// sliding for home section
// select home elements
const contactSection = document.querySelector('.contact-section');
const contactBtn = document.querySelector('.sections.contact');

// select all main sections
const mainSections = document.querySelectorAll('.section');
 
// select all sections buttons
const sectionsBtn = document.querySelectorAll('.sections');

// select all lines between sections buttons
const lines = document.querySelectorAll('.btn-sections .line');



// export main home function
export default function Home(){
    // create instance of sliding class
    let contactSider = new Sliding(contactBtn,contactSection,'slide',mainSections,sectionsBtn,lines);

    // call slide function
    contactSider.slide();

}
