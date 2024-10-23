// pages/about.tsx
import React from 'react';
import "./about.css"

const About: React.FC = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>
                Welcome to our application! We are dedicated to providing the best service possible. 
                Our goal is to create a platform that meets the needs of our users and delivers a seamless experience.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our mission is to empower individuals and businesses through innovative solutions. 
                We strive to continuously improve and adapt to the ever-changing landscape of technology.
            </p>
            <h2>Our Team</h2>
            <p>
                Our team consists of talented professionals with diverse backgrounds and expertise. 
                We work collaboratively to achieve our goals and deliver outstanding results.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions or feedback, feel free to reach out to us at 
                <a href="mailto:info@mycompany.com"> info@mycompany.com</a>.
            </p>
        </div>
    );
};

export default About;
