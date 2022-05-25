import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Shared/Contact';



function App() {
  return (
    <div>
      <Header></Header>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
        </Routes>

        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
