

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl);

let count = 0
function increment() {
     count = count + 1;
     countEl.textContent = count;
}

function save(){
  
  let countStr = ' - ' + count
  if (saveEl) {
    saveEl.textContent = "Number of couples who's entered :" + countStr
  }
  countEl.textContent = 0
    count = 0
  
  console.log(count)
}