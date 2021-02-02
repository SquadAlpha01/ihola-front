import { React } from 'react'
import classes from './sideBar.module.css';
import Settings from '../Settings/Settings'
import ChatsBar from '../chatSidebar/chatSidebar';
import Contacts from '../contactsSidebar/contactsSidebar';

const sideBar = (props) => (
    <div className={classes.sideBar}>
        {props.openStatus.isSettingsOpen ? <Settings></Settings> : null}
        {props.openStatus.isChatsOpen ? <ChatsBar></ChatsBar> : null}
        {props.openStatus.isContactsOpen ? <Contacts></Contacts> : null}
    </div>
);

export default sideBar;