import { getText } from "./GetText";

export const minutesRead = (text) => {
    const length = getText(text).split(" ").length
    const minutes  = length / 250
    return Math.round(minutes)
}