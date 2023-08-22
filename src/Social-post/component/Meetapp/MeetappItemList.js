import React from 'react'
import MeetappItem from './MeetappItem'

function MeetappItemList(props) {
  return (
    <div>
    <ul>
        {props.data.map(d=>(
             <MeetappItem 
                key={d.id}
                title = {d.title}
                image ={d.image}
                address ={d.address}
                desc ={d.description}
                 />
            ))}
    </ul>
    </div>
  )
}

export default MeetappItemList