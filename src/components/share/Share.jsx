import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions, Height} from "@material-ui/icons"
import { useRef,useState,useEffect } from "react";


export default function Share({postdata,setPost}) {
  const [image,setImage]=useState();
  const[text,setText]=useState();
  const[share,setShare]=useState(true)
  const imageref=useRef();
useEffect(()=>{
  setImage("")
  setText("")
},[share] )
  const handleImageClick=()=>{
    imageref.current.click();
  }
  const handleImageChange=(e)=>{
    console.log(e.target.files[0])
     setImage(URL.createObjectURL(e.target.files[0]))
  }
  const handleTextChange=(e)=>{
     console.log(e.target.value)
     setText(e.target.value)
  }
  const handlePost=()=>{
    const data={
      id:postdata.length+1,
      desc: text,
      photo: image,
      date: "Now",
      userId: 1,
      like: 0,
      comment: 0,
    }
    setPost([data, ...postdata])
    setShare(!share)
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind "
            className="shareInput"
            value={text}
            onChange={handleTextChange}
          />
          {image && <img src={image} alt=""  style={{width:"100px",height:"80px" ,marginInline:10}}/>}
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption" onClick={handleImageClick}>
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <input type="file" accept="image/*" ref={imageref}  onChange={handleImageChange} style={{display:"none"}}></input>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton" onClick={handlePost}>Share</button>
        </div>
      </div>
    </div>
  );
}
