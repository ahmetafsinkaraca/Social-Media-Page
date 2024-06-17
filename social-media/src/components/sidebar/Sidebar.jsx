import { MdRssFeed } from 'react-icons/md'
import { BsChatDots } from 'react-icons/bs'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { TiGroupOutline } from 'react-icons/ti'
import { BiBookmark } from 'react-icons/bi'
import { MdHelpOutline } from 'react-icons/md'
import { MdWorkOutline } from 'react-icons/md'
import { BsCalendarEvent } from 'react-icons/bs'
import { MdOutlineSchool } from 'react-icons/md'
import "./sidebar.css"


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <MdRssFeed className='sidebarIcon'/>
                <span className='sidebarListItemText'>feed</span>
            </li>
            <li className="sidebarListItem">
                <BsChatDots className='sidebarIcon'/>
                <span className='sidebarListItemText'>Chats</span>
            </li>
            <li className="sidebarListItem">
                <AiOutlinePlayCircle className='sidebarIcon'/>
                <span className='sidebarListItemText'>Videos</span>
            </li>
            <li className="sidebarListItem">
                <TiGroupOutline className='sidebarIcon'/>
                <span className='sidebarListItemText'>Groups</span>
            </li>
            <li className="sidebarListItem">
                <BiBookmark className='sidebarIcon'/>
                <span className='sidebarListItemText'>Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                <MdHelpOutline className='sidebarIcon'/>
                <span className='sidebarListItemText'>Questions</span>
            </li>
            <li className="sidebarListItem">
                <MdWorkOutline className='sidebarIcon'/>
                <span className='sidebarListItemText'>Jobs</span>
            </li>
            <li className="sidebarListItem">
                <BsCalendarEvent className='sidebarIcon'/>
                <span className='sidebarListItemText'>Events</span>
            </li>
            <li className="sidebarListItem">
                <MdOutlineSchool className='sidebarIcon'/>
                <span className='sidebarListItemText'>Courses</span>
            </li>
            <button className='sidebarButton'>show more</button>
            <hr className='sidebarHr'/>
            <ul>
                <li className='sidebarFriendList'>
                    <img className="personImage" src="/assets/person/3.jpeg" alt="" />
                    <span className="imageText">person</span>
                </li>
                <li className='sidebarFriendList'>
                    <img className="personImage" src="/assets/person/3.jpeg" alt="" />
                    <span className="imageText">person</span>
                </li>
                <li className='sidebarFriendList'>
                    <img className="personImage" src="/assets/person/3.jpeg" alt="" />
                    <span className="imageText">person</span>
                </li>
                <li className='sidebarFriendList'>
                    <img className="personImage" src="/assets/person/3.jpeg" alt="" />
                    <span className="imageText">person</span>
                </li>
                <li className='sidebarFriendList'>
                    <img className="personImage" src="/assets/person/3.jpeg" alt="" />
                    <span className="imageText">person</span>
                </li>
                <li className='sidebarFriendList'>
                    <img className="personImage" src="/assets/person/3.jpeg" alt="" />
                    <span className="imageText">person</span>
                </li>
                <li className='sidebarFriendList'>
                    <img className="personImage" src="/assets/person/3.jpeg" alt="" />
                    <span className="imageText">person</span>
                </li>
                <li className='sidebarFriendList'>
                    <img className="personImage" src="/assets/person/3.jpeg" alt="" />
                    <span className="imageText">person</span>
                </li>
                <li className='sidebarFriendList'>
                    <img className="personImage" src="/assets/person/3.jpeg" alt="" />
                    <span className="imageText">person</span>
                </li>
                <li className='sidebarFriendList'>
                    <img className="personImage" src="/assets/person/3.jpeg" alt="" />
                    <span className="imageText">person</span>
                </li>
                
            </ul>
        </ul>
      </div>
    </div>
  );
}
