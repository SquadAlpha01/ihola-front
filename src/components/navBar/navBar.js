import { React, useState } from 'react'
import classes from './navBar.module.css';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as SettingsIcon } from '../../assets/images/chats.svg'
import { ReactComponent as ChatsIcon } from '../../assets/images/chats.svg'
import { ReactComponent as ContactsIcon } from '../../assets/images/chats.svg'

const NavBar = (props) => {
    return (
        <div className={classes.navBar}>
            <button aria-label="settings" 
                className={`${classes.navButton} ${props.openStatus.isSettingsOpen ? classes.navButtonSelected : null}`} 
                onClick={() => props.handleClick("isSettingsOpen")}>
                <SettingsIcon height={30} width={30} />
            </button>
            <button aria-label="contacts"
                className={`${classes.navButton} ${props.openStatus.isContactsOpen ? classes.navButtonSelected : null}`} 
                onClick={() => props.handleClick("isContactsOpen")}>
                <ContactsIcon height={30} width={30} />
            </button>
            <button aria-label="chats"
                className={`${classes.navButton} ${props.openStatus.isChatsOpen ? classes.navButtonSelected : null}`} 
                onClick={() => props.handleClick("isChatsOpen")}>
                <ChatsIcon height={30} width={30}/>
            </button>
        </div>
    )

}

export default NavBar;