import React, {useState} from 'react';
import { GiBookshelf } from 'react-icons/gi';
import { GiBookmarklet } from 'react-icons/gi'


import './Navbar.css';

const Navbar = () => {
  
  const [toggleMenu , setToggleMenu] = useState(false);
  return (
  <nav className="app__navbar">
    <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#about">Home</a></li>
        <li className="p__opensans"><a href="#bookmarks">BookMarks</a></li>
    </ul>
    <div className="app__navbar-login">
        <a href='#login'  className="p__opensans">Log In / Register</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
    </div>
    <div className="app__navbar-smallscreen">
        <GiBookshelf color="#fff" fontSize ={25} onClick={() => setToggleMenu(true)} />
        
      { toggleMenu && (
       <div className="app__navbar-smallscreen_overlay flex__center slide-bottom" >
            <GiBookmarklet  fontSize={25} className="overlay__close" onClick={()=> setToggleMenu(false)} />  
      <ul className="app__navbar-smallscreen_links">
        <li className="p__opensans"><a href="#about">Home</a></li>
        <li className="p__opensans"><a href="#bookmarks">BookMarks</a></li>
      </ul>
      </div>  
    
      )}
    </div>
  </nav>
  )
}  

export default Navbar;
