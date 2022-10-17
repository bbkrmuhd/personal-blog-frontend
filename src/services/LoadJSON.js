export const loadJSON = (key) => {
    key && JSON.parse(localStorage.getItem(key))
}