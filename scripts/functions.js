import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""

    for (const item of database.fish) {
        if (item.length % 3 === 0) {
            holyFish += `            
            <article class="fish">
                <img src="${item.image}" alt="${item.species} poster" class="fish_img">
                    <div class="fish_details">
                        <h2 class="fish_title">${item.species}</h2>
                        <ul>
                        <li>Name: ${item.name}</li>
                        <li>Length: ${item.length}</li>
                        <li>Location: ${item.location}</li>
                        <li>Diet: ${item.diet}</li>
                    </div>
            </article>`
        }
        
    }

    return holyFish
}

export const soldierFish = () => {
    let soldierFishString = ""

    for (const item of database.fish) {
        if (item.length % 5 === 0) {
            soldierFishString += `            
            <article class="fish">
                <img src="${item.image}" alt="${item.species} poster" class="fish_img">
                    <div class="fish_details">
                        <h2 class="fish_title">${item.species}</h2>
                        <ul>
                        <li>Name: ${item.name}</li>
                        <li>Length: ${item.length}</li>
                        <li>Location: ${item.location}</li>
                        <li>Diet: ${item.diet}</li>
                    </div>
            </article>`
        }
        
    }
    return soldierFishString
}

export const regularFish = () => {
    let regFish = ""

    for (const item of database.fish) {
        if (item.length % 5 !== 0 && item.length %3 !== 0) {
            regFish += `            
            <article class="fish">
                <img src="${item.image}" alt="${item.species} poster" class="fish_img">
                    <div class="fish_details">
                        <h2 class="fish_title">${item.species}</h2>
                        <ul>
                        <li>Name: ${item.name}</li>
                        <li>Length: ${item.length}</li>
                        <li>Location: ${item.location}</li>
                        <li>Diet: ${item.diet}</li>
                    </div>
            </article>`
        }
        
    }
    return regFish
}

