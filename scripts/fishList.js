import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTMLString = ""
    for (const item of database.fish) {
        fishHTMLString += `
            <article class="fish">
                <img src="${item.image}" alt="${item.species} poster" class="movie__poster">
                <div class="fish__details">
                    <h2 class="fish__title">${item.species}</h2>
                    <ul>
                    <li>Name: ${item.name}</li>
                    <li>Length: ${item.length}</li>
                    <li>Location: ${item.location}</li>
                    <li>Diet: ${item.diet}</li>
                </div>
            </article>`
        
    }
    return fishHTMLString
};