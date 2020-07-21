// import sliding section component
import {Sliding} from './slidingSection';

// sliding for home section
// select home elements
const portfolioSection = document.querySelector('.portfolio-section');
const portfolioBtn = document.querySelector('.sections.portfolio');

// select all main sections
const mainSections = document.querySelectorAll('.section');

// select all sections buttons
const sectionsBtn = document.querySelectorAll('.sections');

// select all lines between sections buttons
const lines = document.querySelectorAll('.btn-sections .line');



// export main home function
export default function Home(){
    let screenSize = window.innerWidth;
    if(screenSize <= 768){
        // create instance of sliding class
        let portfolioSider = new Sliding(portfolioBtn,portfolioSection,'slide',mainSections,sectionsBtn,{scroll:true});
    
        // call slide function
        portfolioSider.slide();

    }else{
        // create instance of sliding class
        let portfolioSider = new Sliding(portfolioBtn,portfolioSection,'slide',mainSections,sectionsBtn);
    
        // call slide function
        portfolioSider.slide();
    }

}
