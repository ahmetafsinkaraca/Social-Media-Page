import { MdOutlineNotificationsNone } from 'react-icons/md';
import { MdPersonOutline } from 'react-icons/md';
import {BsChatText } from 'react-icons/bs';
import {AiOutlineSearch } from 'react-icons/ai';
import "./topbar.css"


export default function Topbar() {
  return (
<div className="topbarContainer">
    <div className="topbarLeft">
        <span className="logo">Social</span>
    </div>
    <div className="topbarCenter">
        <div className="searchbar">
             <AiOutlineSearch className="searchIcon"/>            
             <input placeholder="search" type="text" className="searchInput"/>
        </div>
    </div>
    <div className="topbarRight">
        <div className="topbarLinks">
        <span className="homepage">Homepage</span>
        <span className="timeLine">TimeLine</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIcon">
            <MdPersonOutline/>
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIcon">
            <BsChatText/>
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIcon">
            <MdOutlineNotificationsNone/>
            <span className="topbarIconBadge">1</span>
            </div>
        </div>
        <img src="./assets/person/2.jpeg" alt="" className="topbarImg"/>
    </div>
</div>
  )
}
