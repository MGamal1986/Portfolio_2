// import sliding section component
import {
    Sliding
} from './slidingSection';

// sliding for home section
// select home elements
const homeSection = document.querySelector('.home-section');
const homeBtn = document.querySelector('.sections.home');

// select all main sections
const mainSections = document.querySelectorAll('.section');

// select all sections buttons
const sectionsBtn = document.querySelectorAll('.sections');


// select main title element
const mainTitle = document.querySelector('.home-section .main-title');

// import typed js library
import Typed from 'typed.js';
let options = {
    strings: ['hi, i am mohamed gamal', 'i am a fornt end developer'],
    typeSpeed: 45,
    showCursor: false,
    loop: true,
    backDelay: 5000,
    backSpeed: 45
}


// export main home function
export default function Home() {

    // initiate a new instance of typed component with the predefined options
    const typed = new Typed(mainTitle, options);
    // get screen width
    let screenSize = window.innerWidth;
    // console.log(screenSize);
    // create instance of sliding class
    if (screenSize <= 768) {
        let homeSider = new Sliding(homeBtn, homeSection, 'slide', mainSections, sectionsBtn, {
            scroll: true
        });
        // call slide function
        homeSider.slide();
    } else {
        let homeSider = new Sliding(homeBtn, homeSection, 'slide', mainSections, sectionsBtn);
        // call slide function
        homeSider.slide();
    }



}