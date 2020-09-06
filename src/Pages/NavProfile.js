import React from 'react'
import './NavProfile.css';
import ExampleComponent from "react-rounded-image";
import logo from './logo.png';

export default function NavProfile() {
    return (
        <div className="padding">
            <ExampleComponent
                image={logo}
                roundedSize="0"
                imageWidth="50"
                imageHeight="50"
            />
            <h2 className="profile-name" style={{marginTop: "20px"}}>Dr. Young</h2>
        </div>
    )
}
