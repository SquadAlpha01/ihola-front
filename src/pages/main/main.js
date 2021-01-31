import React from 'react';
import classes from './main.module.css';

import ActiveChat from '../../components/activeChat/activeChat';
import NavBar from '../../components/navBar/navBar';
import Sidebar from '../../components/sideBar/sideBar';

import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';

const Main = (props) => {

    let displayed = null;
 
    switch (props.page){
        case('signup'):
            displayed =  <div className={classes.HomeBackground}><SignUp/></div>;
            break;
        case('login'):
             displayed =  <div className={classes.HomeBackground}><Login/></div>;
             break;
        case('chat'):
             displayed =  <div class={classes.main}>
             <NavBar/>
             <ActiveChat/>
             <Sidebar/>
             </div>;
             break; 
        default:
        displayed=null;

    }
    return displayed;
    }


export default Main;