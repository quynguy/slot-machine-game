// * variables* // 

let balance = 500; 
let currentBet = 25;


const winningCombinations = {
    ghost: 100,
    witch: 250,
    cat: 300,
};

const symbolsArray = [];
symbolsArray[0]= "Ghost";
symbolsArray[1] = "Witch";
symbolsArray[2] = "Cat";
symbolsArray[3] = "Ghost";
symbolsArray[4] = "Witch";
symbolsArray[5] = "Cat";
symbolsArray[6] = "Ghost";
symbolsArray[7] = "Witch";
symbolsArray[8] = "Cat";
symbolsArray[9] = "Ghost";


// * dom elements * // 
const creditStat = document.getElementById("credit-stat");
const balanceStat = document.getElementById("balance-stat");
const depositForm = document.getElementById("depositForm");
const spinButton = document.querySelector("#spinBtn button");
const cashOut = document.getElementById("cashout");
const bet25btn = document.getElementById("btn25");
const bet50btn = document.getElementById("btn50");
const betMax = document.getElementById("btnMax");



// * functions * // 
function updateStats() {
    creditStat.textContent = `$ ${balance.toFixed(2)}`;
    balanceStat.textContent = `$ ${(balance - currentBet).toFixed(2)}`;
}

// console.log(gameResults);


// * event listeners * //

depositForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const depositInput = parseFloat(document.getElementById("deposit").value);
    if (!isNaN(depositInput) && depositInput > 0) {
        balance += depositInput;
        updateStats();
    }
});

const gameResults = [];

spinButton.addEventListener("click", function () {
    gameResults.length = 0;
    for (let i = 0; i <3; i++) {
    const randomSymbols = symbolsArray[Math.floor(Math.random() * symbolsArray.length)];
    gameResults.push(randomSymbols);
}
    console.log(gameResults);
});

cashOut.addEventListener("click", function () {
    alert("Thanks for playing!");
});


