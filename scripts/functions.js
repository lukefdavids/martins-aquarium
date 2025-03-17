import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = ""

    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyfish += `            
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
    const soldierFishString = ""

    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldierFish += `            
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
    const regFish = ""

    for (const fish of database.fish) {
        if (fish.length % 5 !== 0 && fish.length %3 !== 0) {
            soldierFish += `            
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

