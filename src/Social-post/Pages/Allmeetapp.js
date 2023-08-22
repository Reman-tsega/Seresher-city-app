import React from 'react'
import MeetappItemList from '../component/Meetapp/MeetappItemList';
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
    id:'c3',
    title:'Gonder',
    image:'https://media.istockphoto.com/id/618321110/photo/two-spur-winged-lapwings-in-mid-flight.jpg?s=1024x1024&w=is&k=20&c=5bksKAzdWBfsfTQjDC6aGGya6hH9yDVW0-AMkhdAkvo=',
    address:'https://www.google.com/maps/@7.0560215,38.4490357,13z?entry=ttu',
    description: 'Gonder is the capital city of Amhara'
  },
]

function Allmeetapp() {
  return (
    <section>
      <h1>All Cities</h1>
      <MeetappItemList data ={DummyDat}/>
    </section>
  )
}

export default Allmeetapp