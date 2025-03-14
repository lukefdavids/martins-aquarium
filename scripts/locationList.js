import {database} from "./aquariumData.js"

export const locationList = () => {
    let locationString = ``
    for (const item of database.locations) {
        locationString += `
        <article class="locations">
            <section class="location">
                <h3>${item.name}</h3>
                <strong>Area</strong>: ${item.location}
                <p>${item.description}</p>
            </section>
        </article>`
            
    }
    return locationString
}