document.querySelectorAll("#option a").forEach((a) => {
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})

function computerChoice(element) {

}

let pilihanUser = element.target.innerText;
let pilihanComputer = document.querySelector("#result");
let choices = ["Rock", "Paper", "Scissors"];

pilihanComputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
pilihanComputer = pilihanComputer.innerHTML

if(pilihanUser == pilihanComputer) {
    alert("DRAW");
}
if(pilihanUser == "Rock" && pilihanComputer == "Scissors") {
    alert("YOU WIN");
} else if(pilihanUser == "Paper" && pilihanComputer == "Rock") {
    alert("YOU WIN");
} else if(pilihanUser == "Scissors" && pilihanComputer == "Paper") {
    alert("YOU WIN");
}

if(pilihanUser == "Rock" && pilihanComputer == "Paper") {
    alert("COMPUTER WIN");
} else if(pilihanUser == "Paper" && pilihanComputer == "Scissors") {
    alert("COMPUTER WIN");
} else if(pilihanUser == "Scissors" && pilihanComputer == "Rock") {
    alert("COMPUTER WIN");
}