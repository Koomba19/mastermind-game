# Mastermind – Dev Notes

## 🏗️ HTML Phase – Build Summary

### ✅ Structure Overview

- Created `index.html` with a clear layout:
  - `#gameBoard` → master container for the entire game interface
  - `#secretCode` → section reserved for the hidden answer
  - `#gameHistorySection` → houses the guess/result history table
  - `#codeAttemptSection` → houses the player input (dropdowns)

### 🧱 Table Layouts

- Used `<table>` elements for structured display:
  - `#gameHistoryTable` contains 10 rows (`turn-10` to `turn-1`)
    - Each row has:
      - `#results-X` → cell for black/white peg feedback
      - `#attempt-X` → cell for displaying player’s guess
  - `#codeAttemptTable` contains a single row of 4 dropdowns (`color-1` to `color-4`)
    - Populated with the 6 standard Mastermind colors

### 🏷️ ID and Class Naming Conventions

- Decided to use:
  - `camelCase` for **IDs**
  - `kebab-case` for **classes**
- Each major section has a unique `id`, and tables have distinct classes:
  - `.game-board`, `.section`, `.game-history-table`, `.code-attempt-table`

### 🔄 Refactors During HTML Phase

- Renamed elements from `guess` to `attempt` for clarity (e.g., `attempt-10`)
- Standardized dropdown IDs (`color-1` to `color-4`)
- Opted to wrap each table in a `<div>` to allow cleaner layout control via CSS

### 📝 Dev Notes

- Considered using `<div>` + CSS grid/flexbox for layout, but tables felt more appropriate for grid-style board structure
- Committed HTML phase with message: `"built out HTML, with id's and classes"`
- HTML phase complete and stable — ready to move into JavaScript logic

## 📌 Goals for JavaScript Phase

- Set up game globals: `secretCode`, `currentTurn`, `maxTurns`
- Grab dropdown elements (`color-1` through `color-4`)
- Implement:
  - `startGame()` to generate a new code
  - `getPlayerAttempt()` to read dropdowns
  - `checkAttempt()` to return black/white peg results
  - `displayAttempt()` to update the game history table and check win/loss
- Eventually:
  - Add reset button (`startGame()` can be reused)
  - Style guess history and result pegs with CSS
  - Track and display win/lose state

## 💡 Ideas

- Consider storing guesses and results in an array of objects for easier tracking
- Maybe animate peg results for fun polish if time allows
- Optional: add color preview or peg display in dropdowns for accessibility

## ⏳ Current Progress

- ✅ HTML layout complete
- ✅ Classes and IDs structured
- 🚧 JS pseudo-structure started (will build out tomorrow)

# Truth will set you free. All those previous notes were done by an AI

## 4/4 I've been busy with work so progress stalled out, here's what I've got from the last 3 days.

- wrote up script.js
- investigated the DOM. Now I know that the basic HTML in index.html is really only there to give the page something to load.  
Everything can be done with Javascript and CSS if you're masochistic.  
Though the same could be said for writing all your CSS and JS inside of your index.html
- discovered class objects, decided to go with that for main loop
- no global variables. Apparently it's considered bad practice for browser games.
- found out about arrow functions, that's witchcraft.
- Event listeners have some kooky bubble thing going on. But it's neat how there's so many of them.
- found out about "this" and what a pain it is. .bind seems to be worth internalizing
- found out the Array.from only works on "iterables" so objects don't work in them
- Dug into array.prototype, that is remarkably similar to class. But prototype came first and still technically builds the class object stuff.

## 4/4 Things I did today

- Made the white peg counter. It took a lot of refactoring  
First I was mutating the playerAttempt to be null, but it wasn't working AND wasn't a good practice for getting it into history
- Made the comparitor to the secretCode  
Really happy with how the nested if conditionals came out with the matchedGuesses array being my middle man. AND gates for the win!
- With a console log, the game is actually playable. It doesn't stop at 10 turns yet, but i did make a little win statement for 4 black pegs.

## I stopped using AI to help take notes. I don't read them anyway. I figure it's also quite noticable, what with the emojis everywhere. Who talks like that?

- I had this file hidden with a gitignore. Found out that was a thing too, which is cool. But let's put it all out there for this project.