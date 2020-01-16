import React from 'react';
import { HashRouter } from 'react-router-dom'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/Footer'

import Messages from '../common/msg/messages'

import Routes from './routes'

export default props => (
    <HashRouter>
        <div className='wrapper'>
            <Header /> 
            <SideBar />
            
            {/* Alteração para a nova versão do react */}
            <Routes />
            {/* código usado no react 15
            <div className='content-wrapper'>
                {props.children}
            </div> */}
            <Footer />
            {/* instanciando o componente de message para que seja enxergado pelo reducer e pela APP */}
            <Messages />
        </div>
    </HashRouter>
)