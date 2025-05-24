import './App.css';
 import { ToastContainer } from 'react-toastify';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import AddData from './components/AddData';
import Home from './components/Home';
import AllStudentDetails from './components/AllStudentDetils';


function App() {
  return (
    <>
    <ToastContainer></ToastContainer>
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/adddata' element ={<AddData></AddData>}/>
      <Route path='/homepage' element={<Home></Home>}></Route>
      <Route path='/studentdetails' element = {<AllStudentDetails></AllStudentDetails>}/>
    </Routes>

    </BrowserRouter>
   
    
    </>
   
  );
}

export default App;
