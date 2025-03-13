import {database} from "./aquariumData.js"

export const tipList = () => {
    let tipListString = `<h2 class="title">Tips</h2>`
        for (const item of database.tips) {
            tipListString += `
            <ul class="tips"><h3>${item.topic}:</h3>
                <li>${item.text}</li>
            </ul>`
        }
    return tipListString
}
        