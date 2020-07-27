import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  static defaultProps = {
    sidesOfdie: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { sidesOfdie } = this.props;
    //Pick die side
    const newDie1 = sidesOfdie[Math.floor(Math.random() * sidesOfdie.length)];
    const newDie2 = sidesOfdie[Math.floor(Math.random() * sidesOfdie.length)];
    //Update the state with new die side
    this.setState({ die1: newDie1, die2: newDie2 });
  }

  render() {
    const { die1, die2 } = this.state;
    return (
      <div>
        <Die face={die1} />
        <Die face={die2} />
        <button onClick={this.handleClick}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
