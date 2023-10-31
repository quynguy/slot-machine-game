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


const spinBtnEl = document.getElementById("spin-button");
// console.log(spinBtnEl);

const reelContainer1El = document.getElementById("reel-container1");
// console.log(reelContainer1El)

const reelContainer1E2 = document.getElementById("reel-container2");
//console.log(reelContainer1E2)

const reelContainer1E3 = document.getElementById("reel-container3");
// console.log(reelContainer1E3)

const reelGhostEl = document.getElementById("reel-images1");
// console.log(reelGhostEl);

const reelWitchEl = document.getElementById("reel-images2");
// console.log (reelWitchEl);

const reelCatEl = document.getElementById("reel-images3");
// console.log (reelCatEl);

let reelSpin = false;

spinBtnEl.addEventListener("click", function(e){
    if (!reelSpin){
        reelSpin = true;
    }
})




















