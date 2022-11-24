let home = 0
let homeEl = document.getElementById("home-el")

let guest = 0
let guestEl = document.getElementById("guest-el")

function home1() {
    home += 1
    homeEl.textContent = home
}

function home2() {
    home += 2
    homeEl.textContent = home
}

function home3() {
    home += 3
    homeEl.textContent = home
}

function guest1() {
    guest += 1
    guestEl.textContent = guest
}

function guest2() {
    guest += 2
    guestEl.textContent = guest
}

function guest3() {
    guest += 3
    guestEl.textContent = guest
}