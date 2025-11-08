let cashAdd = 0
let cash = document.getElementById("points")

function increment() {
    cashAdd += 2
    // cash.innerText = cashAdd
    cash.textContent = cashAdd + ' $'
}

let redeem = 0
let red = document.getElementById("redeems")
function redeemed() {
    redeem = cash.textContent
    red.textContent += ' ~ ' + redeem
    cashAdd = 0
    cash.textContent = cashAdd + ' $'
}

function withdraw() {
    let error = 'something went wrong, please try again'
    mssg = document.getElementById('error')
    mssg.textContent = error
}