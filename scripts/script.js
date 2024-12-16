let foo = 0;
let bar = 0;

let result = document.getElementById("result")

let numeratorInput = document.getElementById("numerator")

numeratorInput.addEventListener("change", () => {
    foo = +numeratorInput.value
    console.log(foo)
})



let denominatorInput = document.getElementById("denominator")

denominatorInpot.addEventListener("change", () => {
    bar = +denominatorInput.value
})


let button = document.getElementById("divideButton")

button.addEventListener("click", () => {
    if (bar === 0 || foo / bar === undefined || foo / bar === NaN || foo / bar === Infinity) {
        alert("You can't divide us!")
    } else {
        result.innerHTML = foo / bar
    }
})