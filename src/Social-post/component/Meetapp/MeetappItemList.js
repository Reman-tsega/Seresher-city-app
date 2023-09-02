import React from 'react'
import MeetappItem from './MeetappItem'

function MeetappItemList(props) {
  // console.log(props.data,"in lis")
  return (
    <div>
    <ul>
        {props.data.map(d=>(
             <MeetappItem 

                key={d.id}
                address ={d.address}
                desc ={d.desc}
                id={d.id}
                image ={d.image}
                title = {d.title}
                 />
            ))}
    </ul>
    </div>
  )
}

export default MeetappItemList