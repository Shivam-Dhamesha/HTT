// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AssistantIcon from '@mui/icons-material/Assistant';

function Navbar({ theme, toggleTheme, isAuth }) {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <header>
            <div className={`sidebar ${isActive ? 'active' : ''}`}>
                <div className='sidebar_btn'>
                    <CloseIcon onClick={handleToggle} className='menue'/>
                    <NavLink to="/login">Sign in</NavLink>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/gallery">Gallery</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contactUs">Contact</NavLink>
                </div>
            </div>
            <nav>
                <div className="left">
                    <div className='navlogo'>
                        <NavLink to="/"><img src={theme === 'light' ? "./raja_logo_2.png" : "./strinja_logo.png"} alt='' /></NavLink>
                    </div>
                </div>
                <div className="right">
                    <div className='nav_btn'>
                        {isAuth?<NavLink to="/logout">Logout</NavLink>:<NavLink to="/login">Sign in</NavLink>}
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/gallery">Courses</NavLink>
                        <NavLink to="/about">About</NavLink>
                        {isAuth?<NavLink to="/new">Community</NavLink>:<NavLink to="/contactUs">Contact</NavLink>}
                    </div>
                    <div className="switch">
                        <a href='https://mediafiles.botpress.cloud/aaa71e8f-36ba-4a10-b1a9-1086d1548f92/webchat/bot.html'><AssistantIcon/></a>
                        <DarkModeSwitch
                            style={{  }}
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                            size={40}
                        />
                    </div>
                    <div className='no'>
                        {!isActive && <MenuIcon onClick={handleToggle} className='menue' />}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
