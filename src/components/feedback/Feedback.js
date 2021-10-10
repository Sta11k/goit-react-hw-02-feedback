import React from 'react';
import styles from './Feedback.module.css';
import { Component } from 'react';

const ButtonGood = ({ countGood, label }) => (
  <button type="button" onClick={countGood}>
    {label}
  </button>
);
const ButtonBad = ({ countBad, label }) => (
  <button type="button" onClick={countBad}>
    {label}
  </button>
);
const ButtonNeutral = ({ countNeutral, label }) => (
  <button type="button" onClick={countNeutral}>
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

  addGood = e => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  addNeutral = e => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  addBad = e => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  //    async countPositiveFeedbackPercentage  (){
  //     let total = await this.setState(prevState => {

  //     return {
  //       total: this.state.good + this.bad + this.neutral,

  //     }
  //   })
  // };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <ButtonGood label="Good Voldemar" countGood={this.addGood} />
        <ButtonNeutral label="Neutral" countNeutral={this.addNeutral} />
        <ButtonBad label="Bad" countBad={this.addBad} />
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

// console.log(evt);
//  this.addGood()
// this.setState(prevState => {
//   return {
//     good: this.state.good+1,

//   }
// })

//  addGood = (ButtonGood, ButtonBad, ButtonNeutral ) => {
//   if (ButtonGood) {
//      this.setState(prevState => {
//   return {
//     good: this.state.good+1,

//   }
// })
//   }
// }

//  this.setState({
//   good: this.state.good+1,
//   neutral: this.state.neutral+1,
//   bad: this.state.bad +1,
//   total: this.good + this.neutral + this.bad,
//   PositiveFedback: 0,
// });
// addGood = (ButtonGood, ButtonBad, ButtonNeutral ) => {
//   if  ( ButtonGood=true) {
//     this.setState(prevState => {

//     return {
//     good: this.state.good + 1,

//     }

//     }
//     )
//   } if (ButtonNeutral) {
//     console.log(ButtonNeutral)
//     this.setState(prevState => {

//     return {
//     neutral: this.state.neutral + 1,

//     }

//     }
//     )
//   } if (ButtonBad) {
//     this.setState(prevState => {

//     return {
//     bad: this.state.bad + 1,

//     }

//     }
//     )
//   }
// }
