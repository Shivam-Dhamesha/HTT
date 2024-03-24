import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = (theme, toggleTheme) => {
  return (
    <div className='footer_credits'>
        <footer>
        <div className='col'>
                <img className='_logo' src={theme === 'light' ? "./raja_logo_2.png" : "./raja_logo_2.png"} alt=""/>
        </div>
        <div className='col'>
                <h4 className='padded'>Contact</h4>
                <p><strong>Address :</strong> Pramukhchhaya Society, Yogi Chowk, Surat, Gujarat 395010</p>
                <p><strong>Phone :</strong> 6351112680</p>
                <div class="follow">
                    <h4 className='bottom'> Follow us</h4>
                    <div class="icon">
                       <a href="" target='_blank'><FacebookIcon/></a> 
                       <a href="https://www.instagram.com/strinja.shop/" target='_blank'><InstagramIcon/></a> 
                    </div>
                </div>
        </div>
        <div class="col">
        <iframe className="map"
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.368965752003!2d72.86611469729438!3d21.20835130261755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa42fba5f61%3A0x30600963d928b44c!2sRaja-Rani%20Coaching!5e0!3m2!1sen!2sin!4v1711209249672!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
    </footer>
    <div class="credits">© NULL POINTERs 2024 </div>
    </div>
  )
}

export default Footer