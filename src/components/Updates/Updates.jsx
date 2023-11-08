import React from 'react'
import './Updates.css'

const Updates = () => {
  return (
    <div className="Updates">
        {UpdatesData.map(update)=>{
            return(
                <h1>{update.name}</h1>
                <h1>{update.noti}</h1>
            )
        }}
    </div>
  )
}

export default Updates