import './App.css';
import "./components/header/navbar.css";
import { GalleryData } from './components/Buying/gallery/GalleryData';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import Footer from './components/header/footer/Footer';
import Sign_in from './components/signup_signin/Sign_in';
import Sign_up from './components/signup_signin/Sign_up';
import {Routes,Route} from 'react-router-dom';
import Gallery from './components/Buying/gallery/Gallery';
import ContactUs from './components/contact/contact';
import TextImageComponent from './components/about/about';
import Back from './components/backgroud/back';
import { createContext, useState } from "react";
import React from 'react';
import Logout from './components/signup_signin/Logout';
import AddForm from './components/addImages/AddForm';
import VideoComponent from './components/Buying/gallery/Tracker';
import RoomForm from './components/Buying/gallery/Live';
import Room from './components/Buying/gallery/room';
export const ThemeContext = createContext(null);



function App() {
  const [isAuth,setIsAuth] = useState(false);
  const handleSignIn = () =>{
    setIsAuth(true);
  }
  const handleSignOut = () => {
    setIsAuth(false);
  }
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Back/>
        <Navbar theme={theme} toggleTheme={toggleTheme} isAuth={isAuth}/>
        <Routes>
          <Route path="/"element={<Maincomp/>}/>
          {!isAuth ? <Route path="/login"element={<Sign_in isAuth={isAuth} handleSignIn={handleSignIn}/>}/>:<Route path='/login' element={<Maincomp/>} />}
          <Route path='/logout' element={<Logout isAuth={isAuth} handleSignOut={handleSignOut}/>} />
          <Route path="/regist/er"element={<Sign_up/>}/>
          <Route path='/gallery' element={<Gallery GalleryData={GalleryData}/>}/>
          <Route path='/new' element={<AddForm GalleryData={GalleryData}/>}/>
          <Route path='/contactUs' element={<ContactUs />}/>
          <Route path='/about' element={<TextImageComponent/>}/>
          <Route path="/tracker" element={<VideoComponent/>}/>
          <Route path='/live' element={<RoomForm/>}/>
          <Route path='/room/:roomId' element={<Room/>}/>
        </Routes>
        <Footer theme={theme} toggleTheme={toggleTheme}/>

      </div>

    </ThemeContext.Provider>
  )
}

export default App;
