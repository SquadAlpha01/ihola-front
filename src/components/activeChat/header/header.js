import React from 'react'
import classes from './header.module.css'

const header = (props) => {
    return (
        <div class={classes.header}>
            {props.receiverName}
        </div>
    )
}

export default header