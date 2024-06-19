# Count 4 Game

Welcome to Count 4, a two-player game where the objective is to align four of your pieces either vertically, horizontally, or diagonally. This game is a digital version of the classic Connect Four game.

## Table of Contents
- [Gameplay](#gameplay)
- [Controls](#controls)
- [Setup](#setup)
- [How to Play](#how-to-play)
- [Game Logic](#game-logic)
- [Future Improvements](#future-improvements)
- [License](#license)

## Gameplay

In Count 4, two players take turns to drop colored pieces into a 7x6 grid. The first player to get four of their pieces in a row—either vertically, horizontally, or diagonally—wins the game. The players' pieces are color-coded as follows:
- Player 1: `rgb(255,206,103)`
- Player 2: `rgb(254,102,135)`

## Controls

- **A**: Move the pointer left.
- **D**: Move the pointer right.
- **Enter**: Drop a piece into the current column.

## Setup

To set up and run the game, follow these steps:

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```sh
    cd count-4-game
    ```

3. Open `index.html` in your web browser to start the game.

## How to Play

1. Open the game in your browser.
2. Use the 'A' and 'D' keys to move the pointer left and right.
3. Press 'Enter' to drop your piece into the selected column.
4. The game alternates between Player 1 and Player 2 automatically.
5. A timer counts down from 30 seconds for each move. If the timer runs out, the turn automatically switches to the other player.
6. The game ends when a player connects four pieces in a row or the grid is full.

## Game Logic

The game logic is implemented using JavaScript and includes functions to handle the following:
- Moving the pointer (`evnt` function)
- Dropping pieces into the grid
- Checking for a win condition (`check` function)
  - Vertical check
  - Horizontal check (left and right)
  - Diagonal checks (both directions)
- Displaying the current player and timer

### Key Functions

- **evnt(a)**: Handles keypress events to move the pointer and drop pieces.
- **check(pos, py)**: Checks if the player has won after dropping a piece.
- **vertical(pos, py)**: Checks vertical alignment.
- **left(pos, py)** and **right(pos, py)**: Check horizontal alignment.
- **diag_up_left(pos, py)**, **diag_up_right(pos, py)**, **diag_down_left(pos, py)**, and **diag_down_right(pos, py)**: Check diagonal alignment.
- **succ(py, p)**: Declares the winner and stops the game.

## Future Improvements

- Add an AI opponent for single-player mode.
- Improve the user interface and animations.
- Add sound effects for better engagement.
- Implement a restart game option.

## License

Feel free to contribute to the project by submitting issues or pull requests. Enjoy the game!
