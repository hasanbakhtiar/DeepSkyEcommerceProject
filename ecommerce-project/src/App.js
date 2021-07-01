import './sass/style.css';
import Header from './components/Header';
import Slider from './components/Slider';
import CartContainer from './components/Cart/CartContainer';

function App() {
  return (
    <div className="container">
     <Header />
     <Slider />
     <CartContainer />
    </div>
  );
}

export default App;
