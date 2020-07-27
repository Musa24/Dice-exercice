import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    sidesOfdie: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
      rolling: false,
      sameFace: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { sidesOfdie } = this.props;
    //Pick die side
    const newDie1 = sidesOfdie[Math.floor(Math.random() * sidesOfdie.length)];
    const newDie2 = sidesOfdie[Math.floor(Math.random() * sidesOfdie.length)];
    //Update the state with new die side

    this.setState({ die1: newDie1, die2: newDie2, rolling: true });

    // Wait one second,then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 10);
  }

  render() {
    let title;
    const { die1, die2, rolling } = this.state;
    if (die1 === die2) {
      title = <h2 className='RollDice-title'>THE SAME DIE</h2>;
    } else {
      title = <h2>{}</h2>;
    }
    return (
      <div className='RollDice'>
        {title}
        <div className='RollDice-container'>
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>

        <button onClick={this.handleClick} disabled={rolling}>
          {rolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;
