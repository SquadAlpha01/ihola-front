import React from 'react'
import classes from './userCard.module.css'
import userImage from '../../assets/CatUsersPhotos/newphat.jpg'
import addIcon from '../../assets/images/add.png'


//props -> username, status , images, clicked
const userCard = (props) => {
    return (
        <div className={classes.UserCard}>
             
            <img className={classes.Image} src={userImage} alt="user icon"/>
            
            <div className={classes.Text}>
                <span><strong>{props.username}<br/></strong></span>
                <span>{props.status}</span>
            </div>
             
            <img onClick={props.clicked} className={classes.Image} src={addIcon} alt="add user"/>

           
        </div>
    )
}
 

export default userCard

