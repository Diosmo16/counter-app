// store the id's in a variable 
let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

console.log(countEl)
// initialize count as 0
let count = 0
// listen for clicks on the buttons(this is done in html)

// increment/decrement count when buttons are clicked
function increment() {
    count +=1
    countEl.textContent = count
}

function decrement() {
// the IF condition is stopping the decrement function once the count is 0
    if (count == 0) {
        return;
    }
    count -= 1
    countEl.textContent = count
}
// create save function to save entries
function save() {
   let countStr = count + " - "
   saveEl.textContent += countStr
   countEl.textContent = 0
   count = 0
}
// change the countEl variable on clicking