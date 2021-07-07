import './sass/style.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/footer/Footer';
import Shop from './components/Shop';
import Blog from './components/Blog';
import Pages from './components/Pages';
import Myaccount from './components/Myaccount';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AddToCart from './components/AddToCart';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route path="/Shop" component={Shop}></Route>
        <Route path="/Blog" component={Blog}></Route>
        <Route path="/Pages" component={Pages}></Route>
        <Route path="/Myaccount" component={Myaccount}></Route>
        <Route path="/ContactUs" component={ContactUs}></Route>
        <Route path="/AddToCart" component={AddToCart}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
