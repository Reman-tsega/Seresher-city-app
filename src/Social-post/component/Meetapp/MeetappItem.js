import React from 'react'
import classes from './MeetappItem.module.css'
import Card from '../UI/Card'

function MeetappItem(props) {
  return (
<li className={classes.item}>
    <Card>
    <div className={classes.image}>
        <img src={props.image} alt='city photo'/>
    </div>
    <div className={classes.content}>
        <h3 className={classes.title} >{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.desc}</p>
    </div>
    <div className={classes.actions}>
        <button> To Favorite</button>
    </div>
    </Card>
</li>
  )
}

export default MeetappItem