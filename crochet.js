let countEl = document.getElementById("count-el")
let count = 0
function control(e){
    if(e.keyCode == 32){
        increment()
    }
}
function increment() {
    count += 1
    countEl.textContent = count
}