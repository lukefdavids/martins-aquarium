import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
const displayFishList = document.getElementById("fishList")
displayFishList.innerHTML = fishHTML

const displayTipList = document.getElementById("tipList")
displayTipList.innerHTML = tipHTML

const displayLocationList = document.getElementById("locationList")
displayLocationList.innerHTML = locationHTML