import React from 'react'
import classes from './MeetappForm.module.css'
import Card from '../UI/Card'
import { useRef } from 'react'

function MeetappForm(props) {

    let titleRef = useRef('');
    let imageRef = useRef('');
    let addressRef = useRef('');
    let descRef = useRef('');


    function submitHandler(e){
        e.preventDefault()
        const title = titleRef.current.value
        const image = imageRef.current.value
        const address = addressRef.current.value
        const descn = descRef.current.value

        const newData = {
            title: title,
            image : image,
            address : address,
            desc : descn
        }

        props.onAddNewCity(newData)
        titleRef =""
        imageRef=""
        addressRef=""
        descRef = ""
        console.log(newData)
    }

  return (
<Card>
<form className={classes.form} onSubmit={submitHandler} >

    <div className={classes.control}>
        <label htmlFor='title'>city Name</label> <br/>
        <input type='text' required id='title' ref ={titleRef} />
    </div>
    <div className={classes.control}>
        <label htmlFor='url'>city image url</label> <br/>
        <input type='url' required id='url' ref={imageRef}/>
    </div>
    <div className={classes.control}>
        <label htmlFor='address'>City Adress</label> <br/>
        <input type= 'text' required id='address' ref={addressRef} />
    </div>
    <div className={classes.control}>
        <label htmlFor='description'>Description</label> <br/>
        <input type= 'text' id='description' required  ref={descRef} />
    </div>
    <div className={classes.action}>
        <button type='submit'>Add new city</button>
    </div>
</form>
</Card>
  )
}

export default MeetappForm