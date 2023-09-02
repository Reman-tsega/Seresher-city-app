import React, { useState } from 'react'
import classes from './MeetappItem.module.css'
import Card from '../UI/Card'
import { useContext } from 'react'
import { FavoriteContext } from '../Store/FavoriteContextProvider'
// import { db } from '../Conig/fiebase'
// import { doc, updateDoc } from 'firebase/firestore'


function MeetappItem(props) {
  // const [buttonCaption, setbuttonCaption] = useState('to favorite')
  const newContext = useContext(FavoriteContext)
  
  const isfav = newContext.checkInFav(props.id)
  
  const toggleFav =  ()=>{
  // const toggleFav = async ()=>{
    // const toggleFavorite = doc(db,"CiyApp",props.id)

    if(isfav){
    // await updateDoc(toggleFavorite,{fav:false})
    newContext.removeFav(props.id)
    // setbuttonCaption('add to fav ')
  }else{
    newContext.addToFav({
      id:props.id,
      title:props.title,
      image:props.image,
      address:props.address,
      desc:props.desc
    }); 
    // await updateDoc(toggleFavorite,{fav:true})
  }
    // setbuttonCaption("remove from fav")
  }



  return (
<li className={classes.item}>
    <Card>
    <div className={classes.image}>
        <img src={props.image} alt='city photo'/>
    </div>
    <div className={classes.content}>
        <h3 className={classes.title} >{props.title}</h3>
        <p>{props.address}</p>
        <p>{props.desc}</p>
    </div>
    <div className={classes.actions}>
        <button onClick={toggleFav} >{isfav? "r":"a"}</button>
    </div>
    </Card>
</li>
  )
}

export default MeetappItem