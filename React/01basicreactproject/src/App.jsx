import React from "react"
import Student from "./comonents/student"
import Employee from "./comonents/employee"
import Header from "./comonents/header"
import Starter from "./comonents/starter"
import Nonveg from "./comonents/nonveg"
import Veg from "./comonents/veg"
import Formation from "./componentDay2/formation"
import User from "./jsondata/user"
import Counter from './componentDay3/count'
import Bank from './Hooks/functionBased'
import Products from './Hooks/User'
import './App.css'
import Logo from "./Netflix/logo"
import Language from "./Netflix/lang"
import Sign from "./Netflix/sign"
import ImageContent from "./Netflix/netflix"
function App(){
  return(
    <>
    <div className="header" >
      <div className="logo">
        <Logo></Logo>
      </div>
      <div className="right">
      <Language></Language>
      <Sign></Sign>
      </div>
    </div>

    <ImageContent></ImageContent>
    
    </>
  )
}
export default App