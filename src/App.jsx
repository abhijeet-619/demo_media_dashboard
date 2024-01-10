import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import { Routes,Route } from "react-router-dom";
import { useState,useEffect } from "react";
import { createContext } from "react";
import { Posts, Users } from "./dummyData";
export const appContext=createContext();
function App() {
  const [userdata,setUser]=useState({id:Users.length+1,name:'Roman Reigns',email:'roman123@gmail.com',password:'1234',confirmPassword:'1234'})
  const [postdata,setPost]=useState(Posts)
 // Users.push({id:11,profilePicture:"assets/person/7.jpeg",username:"Roman Reigns"})
 const[imgurl,setUrl]=useState("assets/person/7.jpeg");
 const[bgurl,setBg]=useState("assets/post/3.jpeg")
  const[userlist,setList]=useState([...Users,{id:11,profilePicture:"assets/person/7.jpeg",username:userdata.name}]);
  return (
  <>
  <appContext.Provider value={{userdata,setUser,postdata,setPost,userlist,setList,imgurl,setUrl,bgurl,setBg}}>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/profile/:username' element={<Profile/>}/>
   </Routes>
   </appContext.Provider>
    
  </>
  );
}

export default App;
     
