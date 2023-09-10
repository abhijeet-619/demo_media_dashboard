import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import { Routes,Route } from "react-router-dom";
import { useState,useEffect } from "react";
import { createContext } from "react";
import { Posts } from "./dummyData";
export const appContext=createContext();
function App() {
  const [userdata,setUser]=useState({name:'Roman Reigns',email:'roman123@gmail.com',password:'1234',confirmPassword:'1234'})
  const [postdata,setPost]=useState(Posts)
  return (
  <>
  <appContext.Provider value={{userdata,setUser,postdata,setPost}}>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
   </Routes>
   </appContext.Provider>
    
  </>
  );
}

export default App;
     
