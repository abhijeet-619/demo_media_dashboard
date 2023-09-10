import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions, Height} from "@material-ui/icons"
import { useRef,useState } from "react";

export default function Share() {
  const [image,setImage]=useState();
  const[text,setText]=useState();
  const imageref=useRef();
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
          {image && <img src={image} alt=""  style={{width:100,Height:50, marginInline:10}}/>}
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
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
