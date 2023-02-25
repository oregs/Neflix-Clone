import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  // const trailer = 'https://www.youtube.com/watch?v=Nv2Hm3rikBg';
  const trailer = 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';
  return (
    <div 
      className="listItem" 
      style={{left: isHovered && index * 225 -50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
        <img 
          src="https://showmax.akamaized.net/i/d19722ee-8121-40bf-8bc1-d854f03d8b85/format=webp/q=70/1600x" 
          alt="movie" 
        />
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop></video>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Nam architecto ipsa voluptatum temporibus commodi non quos.
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
    </div>
  );
};

export default ListItem;