// select nav elements
const nav  = document.querySelector('.btn-sections');
const mainElement = document.querySelector('.btn-sections .main');
// import sidebar component 
import SideBar from './sideBar';

export default function SideNav(){
    let sideNav = new SideBar(mainElement,nav,'small-screen','up');
    sideNav.show();
    sideNav.hide();
}
