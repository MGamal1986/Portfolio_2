// import sliding section component
import {Sliding} from './slidingSection';

// sliding for home section
// select home elements
const aboutSection = document.querySelector('.about-section');
const aboutBtn = document.querySelector('.sections.about');

// select all main sections
const mainSections = document.querySelectorAll('.section');
 
// select all sections buttons
const sectionsBtn = document.querySelectorAll('.sections');

// select all lines between sections buttons
const lines = document.querySelectorAll('.btn-sections .line');




// export main home function
export default function About(){
    // create instance of sliding class
    let aboutSider = new Sliding(aboutBtn,aboutSection,'slide',mainSections,sectionsBtn,lines);

    // call slide function
    aboutSider.slide();

}