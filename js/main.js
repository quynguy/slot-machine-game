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

const arrayImages = [ 
    './assets/cat.png',
    './assets/ghost.png',
    './assets/witch.png',
    './assets/cat.png',
    './assets/ghost.png',
    './assets/witch.png',
    './assets/cat.png',
    './assets/ghost.png',
    './assets/witch.png',
];

console.log(arrayImages[2]);

function spin() {
    const arrayImages = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ];

    const randomIndex = Math.floor(Math.random() * arrayImages.length);
    const randomOrder = arrayImages[randomIndex];
    return randomOrder;
}

const randomOrder = spin();






























