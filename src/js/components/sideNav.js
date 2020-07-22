// select nav elements
const nav = document.querySelector('.btn-sections');
const mainElement = document.querySelector('.btn-sections .main');

// import sidebar component 
import SideBar from './sideBar';

export default function SideNav() {
    // create instance of SideBar class
    let sideNav = new SideBar(mainElement, nav, 'small-screen', 'up');
    // call show function
    sideNav.show();
    // call hide function
    sideNav.hide();
}