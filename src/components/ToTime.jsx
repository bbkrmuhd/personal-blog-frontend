import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const ToTime = ({ date }) => {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    let time = timeAgo.format( new Date(date))
    return (
      <div>{time}</div>
    )
}

export default ToTime