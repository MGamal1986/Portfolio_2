// import sliding section component
import {Sliding} from './slidingSection';

// sliding for home section
// select home elements
const homeSection = document.querySelector('.home-section');
const homeBtn = document.querySelector('.sections.home');

// select all main sections
const mainSections = document.querySelectorAll('.section');

// select all sections buttons
const sectionsBtn = document.querySelectorAll('.sections');

// select all lines between sections buttons
const lines = document.querySelectorAll('.btn-sections .line');

// select main title element
const mainTitle = document.querySelector('.home-section .main-title');

// import typed js library
import Typed from 'typed.js';
let options = {
    strings:['hi, i am mohamed gamal','i am a fornt end developer'],
    typeSpeed: 45,
    showCursor: false,
    loop: true,
    backDelay: 5000,
    backSpeed: 45   
}


// export main home function
export default function Home(){

    // initiate a new instance of typed component with the predefined options
    const typed = new Typed(mainTitle, options);

    // create instance of sliding class
    let homeSider = new Sliding(homeBtn,homeSection,'slide',mainSections,sectionsBtn,lines);

    // call slide function
    homeSider.slide();

}
