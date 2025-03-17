// import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { mostHolyFish, soldierFish, regularFish } from './functions.js'

// Generate the fish list
// const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

const holyFishHTML = mostHolyFish()
const soldierFishHTML = soldierFish()
const regularFishHTML = regularFish()

// Render each HTML string to the correct DOM element
const displayFishList = document.getElementById("fishList")
displayFishList.innerHTML = `${holyFishHTML}${soldierFishHTML}${regularFishHTML}`

const displayTipList = document.getElementById("tipList")
displayTipList.innerHTML = tipHTML

const displayLocationList = document.getElementById("locationList")
displayLocationList.innerHTML = locationHTML