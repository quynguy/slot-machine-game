console.log("js:loaded")

const balanceDisplayEl = document.getElementById("balance-stat");
let currentBalance = 0;
let maxBalance = 10000;
// console.log(currentBalance);

function balanceDisplay() {
    return document.getElementById("balance-stat");
}

const creditDisplayEl = document.getElementById("credit-stat");
let currentCredit = 0;
let maxCredit = 10000;
// console.log(creditDisplayEl);

function creditDisplay() {
    return document.getElementById("credit-stat");
}
// console.log(maxCredit);


const reelContainerEl = document.getElementById("reel-container1");
// console.log(reelContainer1El)

const reelContainerE2 = document.getElementById("reel-container2");
//console.log(reelContainer1E2)

const reelContainerE3 = document.getElementById("reel-container3");
// console.log(reelContainer1E3)

const reelGhostEl = document.getElementById("reel-images1");
// console.log(reelGhostEl);

const reelWitchEl = document.getElementById("reel-images2");
// console.log (reelWitchEl);

const reelCatEl = document.getElementById("reel-images3");
console.log (reelCatEl);

const spinBtnEl = document.getElementById("spin-button");
console.log(spinBtnEl);

const reelsGhost = document.getElementsByClassName("reel-ghost", "reel-ghost", "reel-ghost");
console.log(reelsGhost);

const reelsWitch = document.getElementsByClassName("reel-witch", "reel-witch", "reel-witch");
console.log(reelsWitch);

const reelsCat = document.getElementsByClassName("reel-cat", "reel-cat", "reel-cat");
console.log(reelsCat);


let isStarting = false
spinBtnEl.addEventListener("click", () => {
    if (!isStarting) {
        gameBegan();
    }    
});

function gameBegan() {
    isStarting = true;
    spinBtnEl.disabled = true;
}

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

//console.log(symbolsArray[9]);

function getRandomCombo(symbolsArray, count) {
    if (count > symbolsArray.length) {
      return null;
    }
  
    const randomCombo = symbolsArray.slice().sort(() => 0.5 - Math.random());
    return randomCombo.slice(0, count);
  }
  
const randomSymbols = getRandomCombo(symbolsArray, 3);
// console.log(randomSymbols);














































