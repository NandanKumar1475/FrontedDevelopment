import './App.css';
import { useState } from 'react';
import Footer from './components/Day3/Footer';
import Navbar from './components/Day3/Navbar';
import Car from './components/Day4/Car'
import Profile from './components/Day4/Profile';
import Followers from './components/Day4/Followers';
import Resturent from './components/Day6Classbasedprops/Resturent'
import Facebook from './components/Day5/Facebook';
import LikeComponent from './components/Day5/LikeComonent';
import Whatsapp from './components/Day5/Whatsapp';
import { use } from 'react';
import FetchData from './components/FetchData/Fetchdata';


function App() {
  const[like,setLike] = useState(0);
  return (
    <div className="App">

     {/* <LikeComponent></LikeComponent>
     <h1>Whats app categories</h1>
     <Whatsapp data = {{like,setLike}}></Whatsapp> */}

     {/* fetch data  */}

     <FetchData></FetchData>


    </div>
  );
}

export default App;
