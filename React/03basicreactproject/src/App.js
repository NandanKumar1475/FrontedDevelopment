import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminRegister from './components/admin/AdminRegister';
import UserRegister from './components/user/UserRegister';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/admin/AdminLogin';
import { ToastContainer } from 'react-toastify';
import AdminHomePage from './components/AdminHomePage';
import ErrorMsg from './components/ErrorMsg';

function App() {
  return (
    <>
    <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<ErrorMsg></ErrorMsg>}/>
          <Route path='/' element={<LandingPage />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/userlogin' element={<UserRegister />} />
          <Route path='/adminRegister' element={<AdminRegister></AdminRegister>}></Route>
          <Route path='/adminhomepage/*' element ={<AdminHomePage></AdminHomePage>}></Route>
          
          
        </Routes>
      </BrowserRouter>


    </>

  );
}

export default App;
