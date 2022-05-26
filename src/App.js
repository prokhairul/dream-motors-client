import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Login/RequireAuth';
import AllProducts from './Pages/Products/AllProducts';
import AddProducts from './Pages/Dashboard/AddProducts'
import Review from './Pages/Dashboard/Review';



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
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/allProducts' element={<AllProducts />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>


          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route path='addProduct' element={<AddProducts></AddProducts>}></Route>
            <Route index element={<Review></Review>}></Route>
          </Route>

        </Routes>
        <ToastContainer />
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
