import React from 'react'
import classes from './MeetappForm.module.css'
import Card from '../UI/Card'

function MeetappForm() {
  return (
<Card>
<form className={classes.form}>

    <div className={classes.control}>
        <label htmlFor='title'>city Name</label> <br/>
        <input type='text' required id='title'/>
    </div>
    <div className={classes.control}>
        <label htmlFor='image'>city image url</label> <br/>
        <input type='url' required id='image'/>
    </div>
    <div className={classes.control}>
        <label htmlFor='address'>City Adress</label> <br/>
        <input type='text' required id='address'/>
    </div>
    <div className={classes.control}>
        <label htmlFor='description'>Description</label> <br/>
        <textarea id='description' required rows='5'></textarea>
        <input type='text' required id='address'/>
    </div>
    <div className={classes.action}>
        <button>Add new city</button>
    </div>
</form>
</Card>
  )
}

export default MeetappForm