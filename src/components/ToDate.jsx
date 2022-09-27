import React from 'react'

const ToDate = ({ date }) => {
    let d = new Date(date)
  return (
    <div>{d.toDateString()}</div>
  )
}

export default ToDate