import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useContext ,useRef,useEffect, useState} from "react";
import { appContext } from "../../App";
import { Users } from "../../dummyData";


export default function Profile() {
  
  const imgprofile=useRef();
  const bgprofile=useRef();
  const {userdata,setList,imgurl,setUrl,bgurl,setBg}=useContext(appContext);
 

useEffect(()=>{
   setList([...Users,{id:11, profilePicture:imgurl,username:userdata.name}])
},[imgurl])

  const handleProfile=()=>{
    imgprofile.current.click();
  }
  const handleBg=()=>{
    bgprofile.current.click();
  }
  const handleUrl=(e)=>{
    setUrl(URL.createObjectURL(e.target.files[0]));
  }
  const handleBgUrl=(e)=>{
    setBg(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={bgurl}
                alt="bgimage"
                onClick={handleBg}
              />
              <img
                className="profileUserImg"
                src={imgurl}
                alt="userProfile"
                onClick={handleProfile}
                
              />
              <input type="file" ref={imgprofile} onChange={handleUrl} accept="image/*" style={{display:"none"}}/>
              <input type="file" ref={bgprofile} onChange={handleBgUrl} accept="image/*" style={{display:"none"}}/>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{userdata.name}</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
