import './App.css';
import { useState } from 'react';

const BottomBarMenu = () => {
  return <div className='menu-container'>
    <button id="menuButton" className="menu-button" draggable="true"></button>
  </div>
}

const Grid = () => {
  const numRows = 100;
  const numColumns = 100;
  const [grid, setgrid] = useState(Array.from({ length: 100 }, () => new Array(100).fill(false)));

  const clickHandler = (row, col, buttonId) => {
    console.log("You clicked me!", row, col);
    let button = document.getElementById(buttonId);
    console.log(button.id)
    const newState = grid.map((row, rowIndex) => {
      return grid[rowIndex].map((square, index) => {
        if ('button-' + rowIndex + '-' + index === buttonId) {
          console.log(!grid[rowIndex][index])
          console.log(square)
          return !grid[rowIndex][index];
        } else {
          return square
        }
      })
    })
    setgrid(newState)
  }

  const mouseHovering = (row, col, buttonId) => {
    let button = document.getElementById(buttonId);
    if (grid[row][col] !== true) {
      button.style.backgroundColor = "#ce1313";
    }
  }

  const mouseLeaving = (row, col, buttonId) => {
    let button = document.getElementById(buttonId);
    if (grid[row][col] !== true) {
      button.style.backgroundColor = "#767575";
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let button = document.getElementById('button-' + i + '-' + j);
      if (grid[i][j] === true) {
        button.style.backgroundColor = "#FFFF00";
      } else if (grid[i][j] === false) {
        if (button) {
          button.style.backgroundColor = "#767575";

        }
      }
    }
  }

  const renderButtons = () => {
    const buttons = [];
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColumns; col++) {
        const buttonId = 'button-' + row + '-' + col;
        buttons.push(
          <button key={buttonId} id={buttonId} clickedstate="false" className='grid-button' onClick={() => clickHandler(row, col, buttonId)} onMouseEnter={() => mouseHovering(row, col, buttonId)} onMouseLeave={() => mouseLeaving(row, col, buttonId)}>

          </button>
        )
      }
    }
    return buttons;
  }
  return <div>
    <div className="grid">{renderButtons()}<BottomBarMenu/></div>
  </div>
}

export default Grid;
