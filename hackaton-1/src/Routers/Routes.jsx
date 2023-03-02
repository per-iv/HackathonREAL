import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Datos from "../Pages/Datos";
import { Login } from "../Componentes/Login/Login";
import { Signup } from "../Componentes/Signup/Signup";
import { Inicio } from "../Pages/Inicio";
import { auth } from "..//firebase";
import { useState } from "react";
import { useEffect } from "react";

export function MyRoutes() {
  const [userName,setUserName]=useState([])
  useEffect(()=>{
   auth.onAuthStateChanged((user)=>{
     if(user){
       setUserName(user.displayName)
     }else setUserName("")
   })
  },[])
   
   return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Inicio name={userName}/>} />
        <Route exact path="/Home" element={<Inicio />} />
        <Route exact path="/Datos" element={<Datos/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}
