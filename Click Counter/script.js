let count = document.getElementById("count-el");
let countStart = 0;
let increase = document.getElementById("increase-btn");
let decrease = document.getElementById("decrease-btn");
let reset = document.getElementById("reset-btn")

increase.addEventListener("click", function() {
   countStart++;
   count.textContent = countStart;
})


decrease.addEventListener("click", function() {
   countStart--;
   count.textContent = countStart;
})

reset.addEventListener("click", function(){
    countStart = 0;
    count.textContent = countStart;
})