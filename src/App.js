import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/HomeHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselMovie from './components/Carousel/Carousel';
import Movie from './components/Movie/Movie';



function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //   {/* <Header/> */}
    //   <CarouselMovie/>
    //   </Switch>
    // </BrowserRouter>

    <div >
        <Header/>
        <CarouselMovie/>

    </div>
  );
}

export default App;
