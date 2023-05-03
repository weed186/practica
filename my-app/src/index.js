import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
  return (
    <button className = "square" onClick={props.onClick}>
      {props.value}
    </button>
  );
  }
  

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null), //заполнение 9 клеток пустыми значениями
      xIsNext:true,//по умолчанию ход устанавливается за крестиком (булево значение)
    };
  }
  
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'x' : 'o';//выставление крестика и нолика в клетку.
    this.setState({
      squares:squares,
      xIsNext: !this.state.xIsNext,//инвертирование крестика, т.е, если крестик поставлен, ставится нолик.
    });
  }
  
  renderSquare(i) {
    return (
    <Square
    value = {this.state.squares[i]} 
    onClick={() => this.handleClick(i)}
    /> //передача данных из Board в Square (Board(поле), Square(клетка))
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Победил: ' + winner;
    } else {
      status = 'Следующий ход: ' + (this.state.xIsNext ? 'x' : '0');
    }
    
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}




// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
