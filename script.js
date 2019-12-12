/*
Problem Statement:

Design a maze with following rules.

1. Maze is divided into cells with custom width and height (Already Implemented).

2. Each cell of the maze can be either empty or Food for Mario (Already Implemented).

To Be Implemented:

1. Mario will be starting from a random cell once any of the direction arrow is pressed.

2. Mario should start moving cell by cell in the current direction.

3. If he hits the boundary of the maze he will get reflected in the opposite direction from which he is coming from.

4. He eats the food when he visits a cell which is having food.

5. The food will vanish once he collects it. Use arrows to change the direction. Count the total number of moves to collect all the food.

Constraints

A. 2 <= boardWidth, boardHeight <= 20.

B. Cells with food is generated automatically.

C. Not a single line to be changed from the existing code.

*/

$(document).ready(function() {

  // Function to generate random number
  function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

  // Getting board width and height
  const boardWidth = getRandomArbitrary(5,20);
  const boardHeight = getRandomArbitrary(5,20);
 $('#bWidth span').text(boardWidth);
$('#bHeight span').text(boardHeight);

  // Setting game speed (msec)
  const gameSpeed = 300;

  // Generate food count with at max 1/10 th of cells
  let foodCount = parseInt((boardWidth * boardHeight) /10);

  // Generate random position.


  const startPosition = {
    x: getRandomArbitrary(0, boardWidth),
    y: getRandomArbitrary(0, boardHeight),
  };

  var board = new Array(boardWidth);

  for(var i = 0; i < boardWidth; i++) {
    board[i] = new Array(boardHeight);
  }

  // Array containing cells that has food
  const foodCell = [];

  // Filling food cell. same cell can be repeated due to random fn.
  for(var i = 0; i < foodCount; i++) {
    const positionX = getRandomArbitrary(0, boardWidth);
    const positionY = getRandomArbitrary(0, boardHeight);

    if(!(startPosition.x == positionX && startPosition.y == positionY)) {
      foodCell.push({
        x: positionX,
        y: positionY,
      });
    }

  }

  // App container
  let appContainer = $('.appContainer');

  // Make an empty board
  for(var i = 0; i < boardWidth; i++) {
    for(var j = 0; j < boardHeight; j++) {
      board[i][j] = {
        x: i,
        y: j,
        isHavingFood: false,
      }
    }
  }

  foodCount = 0;
  // Assign cells with food
  for(var i = 0; i < foodCell.length; i++) {
    if(!board[foodCell[i].x][foodCell[i].y].isHavingFood) {
      board[foodCell[i].x][foodCell[i].y].isHavingFood = true;
      foodCount = foodCount + 1;
    }
    board[foodCell[i].x][foodCell[i].y].isHavingFood = true;
  }

  // Generate Board content
  let boardContent = "<div class = 'board'>";

  for(var i = 0; i < boardWidth; i++) {
    let rowContent = "<div class = 'row row-" + i + "'>\n";
    for(var j = 0; j < boardHeight; j++) {
      const additionalClass = board[i][j].isHavingFood ? 'food' : '';
      rowContent += "<div class = 'cell " + "row-" + i + " col-" + j + " " + additionalClass + " '" + "></div>" + "\n";
    }
    rowContent += "</div>";
    boardContent += rowContent;
  }

  appContainer.html(boardContent);

  let currentPosition = {
    x: startPosition.x,
    y: startPosition.y,
  };

  let marioLocationClass = '.row-' + currentPosition.x + '.col-' + currentPosition.y;
  $(marioLocationClass).addClass('mario-location');

  // Your Code Here


});
