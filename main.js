console.log("js:loaded");

document.addEventListener('DOMContentLoaded', () => {
    const balanceEl = document.getElementById("balance");
    const winAmountEl = document.getElementById("winamount");
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("reset");
    const reelsEl = document.querySelectorAll(".reelbox");
    const depositEl = document.getElementById("deposit");
    const bet = document.getElementById("bet1");
    const cashout = document.getElementById("reset");
    
    const symbolsArr = ['👻', '🧙‍♀️', '🎃'];
    let starting = false;
    let balanceAmt = 200;
    let lossAmt = 0;
    updateBalance();
  
    startBtn.addEventListener("click", (bet1) => {
      if (!starting) {
        const bet1 = parseInt(bet.value);
  
        if(bet1 > 0) {
          starting = true;
          gameBegan(bet1);
        } else {
          alert("Oops, you forgot your bet amount!");
        }       
      }
  });
  
  function updateBalance() {
    balanceEl.textContent = `Balance: $${balanceAmt}`;
    balanceEl.style.fontSize = '24px';
  }
  
  function resetBalance (){
    balanceAmt = originalBalance;
    updateBalance();
  }
  
  depositEl.addEventListener("click", () => {
    const depositAmt = 100;
    balanceAmt += depositAmt;
    updateBalance();
  });
  
  function gameBegan(bet1) {
    let rotation = 10;
    let outcome = [];
  
    const spinReel = setInterval(() => {
      outcome = [];
  
      for (let i = 0; i < reelsEl.length; i++) {
        const randomSymbol = Math.floor(Math.random() * symbolsArr.length);
        const symbol = symbolsArr[randomSymbol];
        outcome.push(symbol);
  
        reelsEl[i].textContent = symbol;
      }
  
      rotation --;
      
      if (rotation === 0) {
        clearInterval(spinReel);
        starting = false;
        combinations(outcome, bet1);
      }
    }, 100);
  }
  
  function combinations(outcome, bet1) {
    const randomOutcome = [... new Set(outcome)];
  
    if (randomOutcome.length === 1) {
      const symbol = randomOutcome[0];
      const totalWin = bet1 * (symbolsArr.indexOf(symbol) + 1) *2;
      balanceAmt += totalWin;
      updateBalance();
      winAmountEl.textContent = `Congrats!You won $${totalWin}!`;
    } else {
      lossAmt += 25;
      balanceAmt -= 25;
      updateBalance();
      winAmountEl.textContent = 'Uh-oh. Try again!';
    }
  }
  
    cashout.addEventListener("click", () => {
      alert(`Thanks for playing! Cashout: $${balanceAmt}`);
      resetBalance();
    });
  
  
  });