import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/home/Home';
import Navbar from './page/shared/Navbar';
import About from './page/About';
import Details from './page/home/Details';
import Blog from './page/Blog';
import Message from './page/home/Message';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Message></Message>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about'element={<About></About>}></Route>
        <Route path='/details/:detailsId'element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}

export default App;
