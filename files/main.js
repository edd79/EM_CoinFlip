let tossBtn = document.getElementById("toss")
let choice = document.getElementsByName("coinToss")
let result = document.getElementById("res")

const reload = document.getElementById("reload")
const initH = document.getElementById("h")
const initT = document.getElementById("t")

let pointsH = 0
let pointsT = 0
initH.innerHTML = "Heads: " + pointsH
initT.innerHTML = "Tails: " + pointsT

let res = ""
result.innerHTML = res

// let y = 0
// do {

function selection() {
    for (i = 0; i < choice.length; i++) {
        if (choice[i].checked) {
            document.getElementById("pick").innerHTML = "You chose: " + choice[i].value
        }

        choice[i].checked = false

    }
}


tossBtn.addEventListener('click', () => {
    let x = Math.random()
    if (x > 0.5) {
        alert("Heads")
        document.getElementById("res").textContent = "Heads"
        pointsH++
        document.getElementById("h").textContent = 'Heads: ' + pointsH
    } else {
        alert("Tails")
        document.getElementById("res").textContent = "Tails "
        pointsT++
        document.getElementById("t").textContent = 'Tails: ' + pointsT
    }

})
reload.addEventListener('click', () => {
    window.location.reload()
})


// y++
// }
// while (y < 5)