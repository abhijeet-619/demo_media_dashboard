import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useContext,useEffect, useState } from "react";
import { appContext } from "../../App";
import { Posts } from "../../dummyData";

export default function Feed() {
  const{postdata,setPost}=useContext(appContext);
  console.log(postdata)
  const[newpost,setnew]=useState(postdata)
  useEffect(()=>{
    setnew(postdata)
  },[postdata])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share postdata={postdata} setPost={setPost}/>
        {newpost?.map((p) => {
          return <Post key={p.id} post={p} />
        })}
  
      </div>
    </div>
  );
}
