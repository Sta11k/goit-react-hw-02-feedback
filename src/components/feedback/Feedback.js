import React from 'react';
import styles from './Feedback.module.css';
import { Component } from 'react';

const ButtonGood = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);
const ButtonBad = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);
const ButtonNeutral = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    PositiveFedback: 0,
  };

  updateMessage = evt => {
    console.log(evt);

    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      PositiveFedback: 0,
    });
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <ButtonGood label="Good Voldemar" changeMessage={this.updateMessage} />
        <ButtonNeutral label="Neutral" changeMessage={this.updateMessage} />
        <ButtonBad label="Bad" changeMessage={this.updateMessage} />
        <h2>Statistics</h2>
        <div className={styles.result}>
          <span>No feedback given</span>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
          <span>Total: {this.state.total}</span>
          <span>Positive feedback:{this.state.PositiveFedback}</span>
        </div>
      </>
    );
  }
}

export default Feedback;
