// import font-awesome library
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// import icofont file
import '../scss/icofont/icofont.min.css';

// import bootstrap javascript
import 'bootstrap';
// import bootstrap compiled styling
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import main app scss file
import '../scss/app.scss';


// import nav bar
import SideNav from './components/sideNav';
SideNav();

// import home component
import Home from './components/home';
Home();

// import about component
import About from './components/about';
About();

// import contact component
import Contact from './components/contact';
Contact();

// import portfolio component
import Portfolio from './components/portfolio';
Portfolio();