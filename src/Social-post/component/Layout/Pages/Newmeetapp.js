import React from 'react';
import MeetappForm from '../../Meetapp/MeetappForm';
import { useNavigate } from 'react-router-dom';
function Newmeetapp() {

  const navigate = useNavigate()

  const AddNewCityHandler =async (meetappdata)=>{
    try{

      await fetch('https://cityapp-beb19-default-rtdb.firebaseio.com/city.json',
      {
        method:'POST',
        body:JSON.stringify({...meetappdata,id:meetappdata.title+meetappdata.address}),
        headers:{
          'Content-Type':'application/json'
        }
      }).then(()=>{
        navigate('/')
      })
      
    } catch(err){
      console.error(err)
    }
  }
  return (
    <>
    {/* <button>Add city</button> */}
    {/* <MeetappForm onAddN ewCity = {props.addNewCity} /> */}
    {/* <MeetappForm /> */}
    <MeetappForm onAddNewCity ={ AddNewCityHandler} />
    </>
  )
}

export default Newmeetapp