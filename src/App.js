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
import AddProduct from './Pages/Dashboard/AddProduct'
import Review from './Pages/Dashboard/Review';
import MyOrders from './Pages/Dashboard/MyOrders';
import TotalReviews from './Pages/Shared/TotalReviews';
import ManageProductsAdmin from './Pages/Dashboard/ManageProductsAdmin';
import Purchase from './Pages/Products/Purchase';
import ManageOrdersAdmin from './Pages/Dashboard/ManageOrdersAdmin'
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import Payment from './Pages/Dashboard/Payment';
import RequireAdmin from './Pages/Login/RequireAdmin';



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
          <Route path='/reviews' element={<TotalReviews />}></Route>
          <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>




          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route path='addProduct' element={<RequireAuth><AddProduct></AddProduct></RequireAuth>}></Route>
            <Route path='review' element={<Review></Review>}></Route>
            <Route path='manageProductsAdmin' element={<RequireAdmin><ManageProductsAdmin></ManageProductsAdmin> </RequireAdmin>}></Route>
            <Route path='manageOrdersAdmin' element={<RequireAdmin><ManageOrdersAdmin></ManageOrdersAdmin></RequireAdmin>}></Route>
            <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
            <Route path='users' element={<RequireAuth><Users></Users></RequireAuth>}></Route>
            <Route path='myOrder' element={<RequireAuth> <MyOrders></MyOrders> </RequireAuth>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
            <Route index element={<MyProfile></MyProfile>}></Route>
          </Route>

        </Routes>
        <ToastContainer />
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
