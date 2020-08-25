import React from 'react'
import Actions from './Actions';
import NavProfile from './NavProfile';

function Nav() {
    return (
        <nav>
            <NavProfile/>
            <hr></hr>
            <h3>Dashboard</h3>
            <h3>Messages</h3>
            <h3>Tasks</h3>
            <h3>Patients</h3>
            <hr></hr>
            <Actions/>
        </nav>
    )
}

export default Nav;
