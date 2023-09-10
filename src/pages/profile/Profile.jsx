import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useContext ,useRef,useEffect} from "react";
import { appContext } from "../../App";
import { Users } from "../../dummyData";


export default function Profile() {
  
  const imgprofile=useRef();
  const {userdata,setList,imgurl,setUrl}=useContext(appContext);

useEffect(()=>{
   setList([...Users,{id:11, profilePicture:imgurl,username:userdata.name}])
},[imgurl])

  const handleProfile=()=>{
    imgprofile.current.click();
  }
  const handleUrl=(e)=>{
    setUrl(URL.createObjectURL(e.target.files[0]));
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
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src={imgurl}
                alt="userProfile"
                onClick={handleProfile}
                
              />
              <input type="file" ref={imgprofile} onChange={handleUrl} accept="image/*" style={{display:"none"}}/>
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
