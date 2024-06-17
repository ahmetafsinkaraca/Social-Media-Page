import {CgMoreVerticalAlt} from 'react-icons/cg'
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
             <div className="postTop">
             <div className="postTopLeft">
                <img className='postProfileImg' src="../assets/person/4.jpeg" alt="" />
                <span className='postUserName'>Name Surname</span>
                <span className='postDate'>gg/aa/yyyy</span>
            </div>
            <div className="postTopRight">
            <CgMoreVerticalAlt/>
            </div>
            </div>
            <div className="centerTop">
            <span className='postText'>This is post</span>
            </div>
            <div className="postCenter">
                <img className='postImg' src="../assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <img className='likeIcon' src="../assets/like.png" alt="" />
                <img className='likeIcon' src="../assets/heart.png" alt="" />
                <span className='postLikeCounter'>32 people like </span>
                <span className='postCommentText'>9 comments</span>
                </div>
                <div className="PostBottomRight">
                </div>
            </div>
        </div>
    </div>
  )
}
