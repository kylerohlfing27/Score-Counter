let homeScoreVal = 0
let guestScoreVal = 0
let homeScoreEl = document.getElementById("homeScoreValue")
let guestScoreEl = document.getElementById("guestScoreValue")

function addOneHome() {
    homeScoreVal++
    homeScoreEl.textContent = homeScoreVal
    console.log(homeScoreVal)
}

function addTwoHome() {
    homeScoreVal = homeScoreVal + 2
    homeScoreEl.textContent = homeScoreVal
    console.log(homeScoreVal)
}

function addThreeHome() {
    homeScoreVal = homeScoreVal + 3
    homeScoreEl.textContent = homeScoreVal
    console.log(homeScoreVal)
}

function addOneGuest() {
    guestScoreVal++
    guestScoreEl.textContent = guestScoreVal
    console.log(guestScoreVal)
}

function addTwoGuest() {
    guestScoreVal = guestScoreVal + 2
    guestScoreEl.textContent = guestScoreVal
    console.log(guestScoreVal)
}

 function addThreeGuest() {
    guestScoreVal = guestScoreVal + 3
    guestScoreEl.textContent = guestScoreVal
    console.log(guestScoreVal)
 }