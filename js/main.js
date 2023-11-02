// * variables* // 

let credit = 100; 
let balance = 0;


const symbolsArray = [
    '/assests/ghost.png',
    '/assests/witch.png',
    '/assests/cat.png',
];

const resetImage = ['❓'];


// * dom elements * // 
const creditStat = document.getElementById("credit-stat");
const balanceStat = document.getElementById("balance-stat");
const depositForm = document.getElementById("depositForm");
const spinButton = document.querySelector("#spinBtn button");
const resetButton = document.getElementById('resetbutton');
const cashOut = document.getElementById("cashout");
const bet25btn = document.getElementById("btn25");
const bet50btn = document.getElementById("btn50");
const betMax = document.getElementById("btnMax");
const reels = document.querySelectorAll('.reel-wrapper');
const ghost = document.getElementById("reel-ghost1");
const witch = document.getElementById("reel-witch1");
const cat = document.getElementById("reel-cat1");


// * functions * // 
function updateCredits() {
    creditStat.textContent = `$ ${credit.toFixed(2)}`;
}

let betAmt25 = 25;
let betAmt50 = 50;
let maxBet = 100;

const betAmount = [betAmt25, betAmt50, maxBet];

const won25= 20;
const won50= 50;
const wonMax= 100;


function updateBalance(winningCombo, betAmount) {
    if (winningCombo > 0) {
        balance += winningCombo;
    } else {
        credit -= betAmount;
    }
    balanceStat.textContent = `$ ${balance.toFixed(2)}`;
}


function checkCombo(spinResult, betAmount) {
    const winningCombinations = {
        ghost: 100,
        witch: 250,
        cat: 300,
    };

    let totalWinnings = 0;

    if (totalWinnings > 0) {
        updateBalance(totalWinnings);
    } else {
        updateBalance(betAmount);
    }

    for (const symbols of spinResult){
        if (winningCombinations[symbols]) {
            totalWinnings += winningCombinations[symbols];
        }
    }

    console.log('spinResult:', spinResult);
    console.log('totalWinnings:', totalWinnings);
    console.log('betAmount:', betAmount);
}


resetButton.addEventListener('click', resetGame);
function resetGame() {
    reels.forEach(reel => {
        const reelImages = reel.querySelectorAll('.reel-ghost, .reel-witch, .reel-cat');
        reelImages.forEach(image => {
            image.innerHTML = "";
        });
    })
}



// * event listeners * //


depositForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const depositInput = parseFloat(document.getElementById("deposit").value);
    if (!isNaN(depositInput) && depositInput > 0) {
        credit += depositInput;
        updateCredits();
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
        checkCombo(gameResults, betAmount);
});


console.log("symbolsArray");



cashOut.addEventListener("click", function () {
    alert("Thanks for playing!");
});


bet25btn.addEventListener("click", function () {
    checkCombo(gameResults, betAmt25);
});

bet50btn.addEventListener("click", function () {
    checkCombo(gameResults, betAmt50);
});

betMax.addEventListener("click", function (){
    checkCombo(gameResults, maxBet);
});

