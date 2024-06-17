import {MdOutlinePermMedia} from 'react-icons/md'
import {BiLabel} from 'react-icons/bi'
import {MdOutlineEmojiEmotions} from 'react-icons/md'
import {MdRoom} from 'react-icons/md'
import './share.css'

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImage" src="/assets/person/2.jpeg" alt="" />
                <input className="shareInput" placeholder="What's in your mind" 
                type="text" />
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
            <div className='shareOptions'>
            <div className="shareOption">
               <MdOutlinePermMedia style={{ color: "tomato" }} className='shareIcon' />
               <span className='shareOptionText'>Photo or Video</span>
            </div>
            <div className="shareoption">
                <BiLabel style={{ color: "blue" }}className='shareIcon' />
                <span className='shareOptionText'>Tag</span>
            </div>
            <div className="shareoption">
                <MdRoom style={{ color: "green" }} className='shareIcon'/>
                <span className='shareOptionText'>Location</span>
            </div>
            <div className="shareOption">
                <MdOutlineEmojiEmotions style={{ color: "goldenrod" }} className='shareIcon'/>
                <span className='shareOptionText'>Feelings</span>
            </div>
            <button className='shareButton'>Share</button>
            </div>
            </div>
        </div>
    </div>
  );
}
