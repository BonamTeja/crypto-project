import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Register from './Pages/Register';
import About from './Pages/About';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import Watchlist from './Pages/Watchlist';
import AllCoins from './Pages/AllCoins';
import Portfolio from './Pages/Portfolio';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditProfile from './Helpers/EditProfile';
import Careers from './Pages/Careers';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/list' element={<Watchlist />} />
        <Route path='/allCoins' element={<AllCoins />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/edit' element={<EditProfile />} />
        <Route path='/careers' element={<Careers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
