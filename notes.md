# Mastermind – Dev Notes 3/25

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

- No worries on authenticity. I was only plugging what I built into the prompts to help me write up notes and milestones. But it was getting tedious so I stopped.

## 4/4 I've been busy with my day job so progress stalled out, here's what I've got from the last 3 days.

- wrote up script.js
- investigated what a DOM is. Now I know that the basic HTML in index.html is really only there to give the page something to load.  
Everything can be done with Javascript and CSS if you're masochistic.  
Though the same could be said for writing all your CSS and JS inside of your index.html
- discovered class objects, decided to go with that for main game loop.
- no global variables. Apparently it's considered bad practice for browser games.
- found out about arrow functions, that's witchcraft.
- Event listeners have some kooky bubble thing going on. But it's neat how there's so many of them.
- found out about "this" and what a pain it is. .bind seems to be required for making it work 90% of the time
- found out the Array.from only works on "iterables" so objects don't work in them. Discarded the idea to use it.
- Dug into array.prototype, that is remarkably similar to class. But prototype came first and still technically builds the class object stuff.

## 4/4 Things I did today

- Made the white peg counter. It took a lot of refactoring  
First I was mutating the playerAttempt to be null, but it wasn't working aswell wasn't a good practice for getting it into history
- Made the comparitor to the secretCode  
Really happy with how the nested if conditionals came out with the matchedGuesses array being my middle man. AND gates for the win!
- With a console log, the game is actually playable. It doesn't stop at 10 turns yet, but i did make a little win statement for 4 black pegs.
- Ran into some weird issues with the history array of objects where sometimes the history would just change, like feedback.  
I did end up going to AI for help on that and learned about spread syntax. It creates a new and shallow copy instead of a reference/pointer  
which is apparently what I was doing before, just making pointers point to more pointers. I get it, but I do need to read up on spreaders and the rest property more.  
Since I don't think the original purpose is to make a copy of the value. But I really need to look at syntax for it. Took like 4 tries before I got the syntax down correctly since it changes from use to use. Definitly helping to cement just how different arrays, objects, and primitives are.

## 4/7 Some updates before the big send off

- I've finally learned how to use things like innerHTML  
There are a lot of things that the DOM can change. So worth looking at and playing around.
- refactored the ID on most of the table so the instead of starting on feedback-1-1, it starts on feedback-0-1  
This makes it so much simpler to avoid making mistakes when calling "this.turn" for the appropriate number to check the arrays
- Didn't get to CSS in time, but I intend to finish this project during the following weeks, as I am proud of it

## I stopped using AI to help take notes. I don't read them anyway. I figure it's also quite noticable, what with the emojis everywhere. Who talks like that?

- I had this file hidden with a gitignore. Found out that was a thing too, which is cool. But let's put it all out there for this project.