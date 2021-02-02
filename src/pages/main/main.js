import React, { useState } from 'react';
import classes from './main.module.css';

import ActiveChat from '../../components/activeChat/activeChat';
import NavBar from '../../components/navBar/navBar';
import Sidebar from '../../components/sideBar/sideBar';

import SignUp from '../SignUp/SignUp';
import Login from '../login/login';

const Main = (props) => {

    let displayed = null;
    const [openStatus, setOpenStatus] = useState({
        isSettingsOpen: false,
        isContactsOpen: false,
        isChatsOpen: true
    });
    const handleClick = (event) => {
        setOpenStatus({
            isSettingsOpen: false,
            isContactsOpen: false,
            isChatsOpen: false, 
            [event]: true
        })
        console.log(event)
        console.log(openStatus)
    }

    switch (props.page){
        case('signup'):
            displayed =  <div className={classes.HomeBackground}><SignUp/></div>;
            break;
        case('login'):
             displayed =  <div className={classes.HomeBackground}><Login alert='true'/></div>;
             break;
        case('chat'):
             displayed =  <div class={classes.main}>
             <NavBar openStatus={openStatus} handleClick={handleClick}/>
             <ActiveChat/>
             <Sidebar openStatus={openStatus}/>
             </div>;
             break; 
        default:
        displayed=null;

    }
    return displayed;
    }


export default Main;