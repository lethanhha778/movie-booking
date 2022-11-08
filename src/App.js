import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselMovie from './components/Carousel/index.jsx';
import Theater from './components/Theater';




function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //   {/* <Header/> */}
    //   <CarouselMovie/>
    //   </Switch>
    // </BrowserRouter>

    <div >
        <Theater/>

    </div>
  );
}

export default App;
