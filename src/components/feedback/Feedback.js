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
  // static defaultProps = {
  //   total: 0,
  // };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    totalResult: this.props.total,
    positiveFedback: 0,
  };

  // static propTypes = {};

  // state = {
  //   goodValue: this.props.good,
  //   neutralValue: this.props.neutral,
  //   badValue: this.props.bad,
  //   totalValue: this.props.total,
  //   positiveFedbackValue: this.props.positiveFedback,
  // };

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

  // resultTotal = () => {
  //   this.total = this.state.good + this.state.neutral + this.state.bad;

  //   // this.setState(prevState => {
  //   //   return {
  //   //     totalResult: prevState(
  //   //       this.state.good + this.state.neutral + this.state.bad,
  //   //     ),
  //   //   };
  //   // });
  // };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <ButtonGood label="Good Voldemar" countGood={this.addGood} />
        <ButtonNeutral label="Neutral" countNeutral={this.addNeutral} />
        <ButtonBad label="Bad" countBad={this.addBad} />
        <h2>Statistics</h2>

        <section className={styles.result}>
          <span>No feedback given</span>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
          <span>
            Total: {this.state.good + this.state.neutral + this.state.bad}
          </span>
          <span>
            Positive feedback:
            {Math.round(
              (this.state.good * 100) /
                (this.state.good + this.state.neutral + this.state.bad),
            )}
            %
          </span>
        </section>
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
