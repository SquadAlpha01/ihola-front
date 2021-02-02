import React from 'react';
import classes from './Settings.module.css';
import Avatar from '../../UI/AvatarWithBadge/AvatarWithBadge'
import LogOutButton from './LogOutButton/LogOutButton'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { RootRef } from '@material-ui/core';

const Settings = () => (

   
<div className={classes.Container}>
<p className={classes.Title}>Settings</p>
<Avatar/>
<p style={{fontSize:"18px", margin:"15px"}}>Phat Cat</p>

<TextField 
    style={{fontSize:"12px", width:"80%", margin:"3px"}} 
    id="filled-basic" 
    label="Status" 
    variant="filled" 
    value="Loves naps and scratching furniture Loves naps and scratching furniture" 
    multiline="true"/>

<TextField 
    style={{fontSize:"12px", width:"80%", margin:"3px"}} 
    size="medium" 
    id="filled-basic" 
    label="Username" 
    variant="filled" 
    value="Phat Cat" />

<TextField 
    style={{fontSize:"12px", width:"80%", margin:"3px",}} 
    id="filled-basic" 
    label="Password" 
    variant="filled" 
    value="meow" />

<TextField 
    style={{fontSize:"12px", width:"80%", margin:"3px"}} 
    id="filled-basic" 
    label="Email" 
    variant="filled" 
    value="PhatCat@home.meow"/>

<Button style={{margin:"20px"}}variant="contained" color="primary">
  Logout
</Button>
</div>
);

export default Settings;