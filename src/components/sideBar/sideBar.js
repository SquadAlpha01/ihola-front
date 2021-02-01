import { React } from 'react'
import classes from './sideBar.module.css';
import Settings from '../Settings/Settings'

const sideBar = (props) => (
    <div className={classes.sideBar}>
       <Settings/>
    </div>
);

export default sideBar;