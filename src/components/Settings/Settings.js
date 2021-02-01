import React from 'react';
import classes from './Settings.module.css';
import Avatar from '../../UI/AvatarWithBadge/AvatarWithBadge'

const Settings = () => (
<div className={classes.Container}>
<p className={classes.Title}>Settings</p>
<Avatar/>
</div>
);

export default Settings;