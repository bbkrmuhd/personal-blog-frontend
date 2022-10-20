import { getText } from "./GetText";

export const minutesRead = (text) => {
    const length = getText(text).length
    const minutes  = length / 200
    return Math.round(minutes)
}