import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

export const UserService = {
    
}

export const saveJSON = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const loadJSON = (key) => {
        key && JSON.parse(localStorage.getItem(key))
}


export const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
}


export const minutesRead = (text) => {
    const length = getText(text).split(" ").length
    const minutes  = length / 250
    return Math.round(minutes)
}

export const toDate = (date) => {
    let d = new Date(date)
  return d.toDateString()
}


export const toTime = (date) => {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    let time = timeAgo.format( new Date(date))
    return time
}