Le Quyen Nguyen | GA | SEIR 10/16 

Unit 01 - Project 

GitHub Project Repo:
https://github.com/quynguy/slot-machine-halloween-edition-project

Choice of Game: 
Slot Machine - Halloween Edition 

Wireframe:
Start: https://i.ibb.co/XLy5Lwh/1.png
End: https://i.ibb.co/3SBZdWh/2.png

Dare to spin the reels and see if the Halloween spirits are in your favor? 

User Stories:
1. As a player, I want to be able to spin the reel so that the game begins.
2. As a player, I want to see the symbols on the reels after spinning so that I can determine if I've won.
3. As a player, I want to be able to adjust my bet amount before spinning the reel.
4. As a player, I want to see my current balance or credits displayed on the screen.
5. As a player, I want to see the payout amount I've won after a spin.
6. As a player, I want to be able to log in and see my last previous 5 game interactions.
7. As a player, I want to be able to make a (false) deposit at any time in the game.

HTML Structure:
1. Symbols: Ghost, Witch Hat & Cat
2. Bet Amount Buttons - $25, $50, Max Bet ($100)
3. Update Player Balance & Credits
4. Stimulate SPIN button.
5. Calculate winnings
6. Add more credits
7. Game Over
8. Log In / Sign Up
9. Remember last 5 transactions/user interactions.
10. Reset game after each round.
11. Update balance using deposit button.

Event Listeners
1. Spin Button - click to initiate spinning the reels
2. Cash Out - reset the game state
3. Log In - existing users will be able to access previous 5 transactions
4. Sign Up - signs users up
5. Deposit - fake deposit, updates balance

Game State
1. Show player's current balance
2. Display symbols on the reels
3. Previous 5 transactions/user interaction with game
4. Playing sound effects

Functions/Init
1. spinButton - spin reel to begin game
2. gameOutcome - displays the result of the game outcome
3. playerBalance - displays the player's balance
4. balance - current player's balance
5. betAmount - choice of bet amount, $25, $50, Max Bet ($100)
6. spinSound - spinning sound effect
7. winSound - winning sound effect
8. loseSound - losing sound effect
9. symbols - array of possible symbols
10. Math.random() - generate random outcome combinations
11. checkWin – check to see if symbols match the winning combinations
12. updateBalance – update balance accordingly to winning or losing combos
13. playSounds – spin reel sound, winning sound & losing sound
14. gameOver() – clear interval, reset game