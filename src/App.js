import React, { Component } from 'react';
import './App.css';
import Rating from 'react-rating-tooltip';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 5,
      counterPosition: 'left',
      clearRating: true,
      textPosition: 'right',
      tooltipContent: ["Very Bad", "Bad", "Fair", "Good", "Very Good"],
      ratingValue: ["Very Bad", "Bad", "Fair", "Good", "Very Good"],
      starStyle: {
        height: '28px',
        backgroundColor: '#F2F2F2',
        paddingLeft: '2px',
        paddingRight: '2px',
        color: '#F58220',
        lineHeight: '28px',
        marginLeft: '5px',
        marginRight: '5px',
      },
      styleConfig: {
        counterStyle: {
          height: '28px',
          backgroundColor: '#F58220',
          paddingLeft: '12px',
          paddingRight: '12px',
          color: '#FFF',
          lineHeight: '28px',
    
        },
        starContainer: {
          fontSize: '24px',
          backgroundColor: '#F2F2F2',
          height: '28px',
        },
        statusStyle: {
          height: '28px',
          backgroundColor: '#F58220',
          paddingLeft: '12px',
          paddingRight: '12px',
          color: '#FFF',
          lineHeight: '28px',
          minWidth: '100px',
          fontSize: '18px',
          textAlign: 'center',
        },
        tooltipStyle: {
          fontSize: '14px',
          padding: '5px',
        }
    }
    }
  }

  componentDidMount(){
    alert("Check console for callback after change in rating")
  }
  handleChange = (RatingIndex, RatingValue) => {
    console.log(RatingIndex, RatingValue);
  }


  render() {
    return (
      <div className="App">
        <h2>React-rating-tooltip Demo</h2>
        <Rating
          max={this.state.max}
          styleConfig={this.state.styleConfig}
          counterPosition={this.state.counterPosition}
          clearRating = {this.state.clearRating}
          textPosition = {this.state.textPosition}
          tooltipContent={this.state.tooltipContent}
          ratingValue={this.state.ratingValue}
          onChange={this.handleChange}
          ActiveComponent={<i className="fa fa-star" style={this.state.starStyle} />}
          InActiveComponent={<i className="fa fa-star-o" style={this.state.starStyle} />}
        />
      </div>
    );
  }
}

export default App;
