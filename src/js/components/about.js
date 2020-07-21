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





// export main home function
export default function About(){
    let screenSize = window.innerWidth; 
    if(screenSize <= 768){
        // create instance of sliding class
        let aboutSider = new Sliding(aboutBtn,aboutSection,'slide',mainSections,sectionsBtn,{scroll:true});
        // call slide function
        aboutSider.slide();

    }else{
        // create instance of sliding class
        let aboutSider = new Sliding(aboutBtn,aboutSection,'slide',mainSections,sectionsBtn);
        // call slide function
        aboutSider.slide();
    }

}