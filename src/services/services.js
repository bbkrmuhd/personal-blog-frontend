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