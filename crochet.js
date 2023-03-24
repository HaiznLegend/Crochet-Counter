let countEl = document.getElementById("count-el")
let count = 0
let loveEl = document.getElementById("love-el")
let love = "I love you infinity X "
function control(e){
    if(e.keyCode == 32){
        increment()
    }
}
function increment() {
    count += 1
    countEl.textContent = count
}
function subtract() {
    if (count >= 1) {
        count -= 1
        countEl.textContent = count
    }
}
function reset() {
    count = 0
    countEl.textContent = count
}
function generate() {
    love = "I love you infinity X " + Math.floor(Math.random()*99) + 1
    loveEl.textContent = love
}
