import './App.css';
import {useState} from 'react';

const Grid = () => {
  const numRows = 100;
  const numColumns = 100;
  const grid = useState([100][100]);

  const clickHandler = (row, col, buttonId) => {
    console.log("You clicked me!", row, col);
    let button = document.getElementById(buttonId);
    console.log(button.id)
    if (!button.clickedstate) {
      button.style.backgroundColor = "#FFFF00";
      button.clickedstate = !button.clickedstate
    } else {
      button.style.backgroundColor = "#767575";
      button.clickedstate = !button.clickedstate
    }
  }

  const renderButtons = () => {
    const buttons = [];
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColumns; col++) {
        const buttonId = 'button-' + row + '-' + col;
        buttons.push(
          <button key={buttonId} id={buttonId} clickedstate="false" className='grid-button' onClick={() => clickHandler(row, col, buttonId)}>
            
          </button>
        )
      }
    }
    return buttons;
  }
  return <div className="grid">{renderButtons()}</div>
}

export default Grid;
