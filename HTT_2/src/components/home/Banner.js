import React, { useEffect } from 'react';
import { useSpring } from 'react-spring';
import { NavLink } from 'react-router-dom';
import Swiper from 'swiper'; // Assuming you're using swiper package
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import './banner.css';
import { closest, Touch, isNullOrUndefined } from '@syncfusion/ej2-base';

const Banner = () => {
    let swiper;

    useEffect(() => {
        swiper = new Swiper(".swiper", {
            effect: "cards",
            grabCursor: true,
            initialSlide: 2,
            speed: 500,
            loop: true,
            rotate: true,
            mousewheel: {
                invert: false,
            },
        });
    }, []);

    const styles = useSpring({
        loop: { reverse: false },
        from: { translateY: 0 },
        to: { translateY: -50 },
        config: {
            mass: 10,
            tension: 120,
            friction: 50,
            clamp: true
        }
    });

    return (
        <>
            <div className="hero">
                <div className='left'>
                    <h2>Empower Your Success</h2>
                    <h2>With Raja Rani Coaching</h2>
                    <div className='tagline'>
                        <p>Journey of passion & Excellence</p>
                        <p>"Elevate Your Stitching Game with Unique & Trendy Styles" </p>
                    </div>
                    <NavLink className='button' to="/about"> <button>Start Your Journey Now</button></NavLink>
                </div>
                <div className='right'>
                    
                </div>
            </div>
        </>
    )
}

export default Banner;
