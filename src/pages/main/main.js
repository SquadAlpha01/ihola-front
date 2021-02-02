import React, { Component } from 'react';
import ActiveChat from '../../components/activeChat/activeChat';
import NavBar from '../../components/navBar/navBar';
import Sidebar from '../../components/sideBar/sideBar';
import classes from './main.module.css';

class Main extends Component { 
    state = {
        isSad: true
    }

    render() {
        return (
            <div className={classes.main}>
                <NavBar/>
                <ActiveChat/>
                <Sidebar/>
            </div>
        )
    }

}

export default Main;