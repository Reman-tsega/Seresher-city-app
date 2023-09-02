import React,{useEffect, useState} from 'react'
import MeetappItemList from '../../Meetapp/MeetappItemList';
const DummyDat =[
  {
    id:'c1',
    title:'Addis Ababa',
    image:'https://images.unsplash.com/photo-1624314138470-5a2f24623f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    address:'https://www.google.com/maps/@8.9948706,38.7767244,15z?entry=ttu',
    description: 'Addis ababa is the capital city of Ethiopia'
  },
  {
    id:'c2',
    title:'Adama',
    image:'https://images.unsplash.com/photo-1555488410-ce955d52dece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    description: 'Adama is the capital city of Oromia'
  },
  {
    id:'c4',
    title:'Addis Ababa',
    image:'https://images.unsplash.com/photo-1624314138470-5a2f24623f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    address:'https://www.google.com/maps/@8.9948706,38.7767244,15z?entry=ttu',
    description: 'Addis ababa is the capital city of Ethiopia'
  },
  {
    id:'c3',
    title:'Gonder',
    image:'https://media.istockphoto.com/id/618321110/photo/two-spur-winged-lapwings-in-mid-flight.jpg?s=1024x1024&w=is&k=20&c=5bksKAzdWBfsfTQjDC6aGGya6hH9yDVW0-AMkhdAkvo=',
    address:'https://www.google.com/maps/@7.0560215,38.4490357,13z?entry=ttu',
    description: 'Gonder is the capital city of Amhara'
  },
]

function Allmeetapp() {

  const [isLodinge, setisLodinge] = useState(true)
  const [Cities, setCities] = useState([])

  useEffect(()=>{
    setisLodinge(true)

  fetch('https://cityapp-beb19-default-rtdb.firebaseio.com/city.json').then(
    (response)=>{
      return response.json()
    }
  ).then(
    (data)=>{
      // console.log(data,"in 1")

      // data={
      //   'key1':{
      //     id,
      //     name,
      //     address
      //   },
      //   'kay2':{
      //     id,
      //     name,
      //     address
      //   }
      // }

      const AllCities =[
        // {
        //   id:'c1',
        //   title:'Addis Ababa',
        //   image:'https://images.unsplash.com/photo-1624314138470-5a2f24623f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        //   address:'https://www.google.com/maps/@8.9948706,38.7767244,15z?entry=ttu',
        //   desc: 'Addis ababa is the capital city of Ethiopia'
        // },
        // {
        //   id:'c2',
        //   title:'Adama',
        //   image:'https://images.unsplash.com/photo-1555488410-ce955d52dece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        //   desc: 'Adama is the capital city of Oromia'
        // },
      
      ]

      for (const key in data){
        const Citys = {
          ...data[key],
          id:key,
          fav:false
        };
        AllCities.push(Citys)
      }
      // console.log(AllCities,"2")

      setisLodinge(false)
      setCities(AllCities)
      
      
    }

  )
},[])

  if(isLodinge){
    return (
      <section>
        <p>Loading ...</p>
      </section>
    )
  }
  return (
    <section>
          <h1>All Cities</h1>
      <MeetappItemList data ={Cities}/>

    </section>
  )
}

export default Allmeetapp