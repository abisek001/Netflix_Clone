import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Player from './Pages/Player';
import TvShow from './Pages/tvShow';
import Netflix from './Pages/netflix';
import Movies from './Pages/Movies';

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route exact path='/login' element ={<LoginPage />}/>
        <Route exact path='/' element ={<SignupPage />}/>
        <Route exact path='/player' element ={<Player />}/>
        <Route exact path='/tv' element ={<TvShow />}/>
        <Route exact path='/home' element ={<Netflix />}/>
        <Route exact path='/movies' element ={<Movies />}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
