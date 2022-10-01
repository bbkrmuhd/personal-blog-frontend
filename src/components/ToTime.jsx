import React from 'react'

const ToTime = ({ date }) => {
    let d = new Date(date)
    return (
      <div>{d.toLocaleTimeString()}</div>
    )
}

export default ToTime