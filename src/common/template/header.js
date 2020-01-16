import React from 'react'
import NavBar from './navBar'
export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>Be</b></span>
            <span className='logo-lg'>
                <i className='fa fa-money'></i>
                <b>Be</b>ganinha
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <NavBar />  
        </nav>
    </header>
)