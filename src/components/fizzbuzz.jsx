import React, { Component } from "react";
import handleFizz from "./handlers/handlefizz";
import handleBuzz from "./handlers/handlebuzz";
import handleFizzbuzz from "./handlers/handlefizzbuzz";
import handlePass from "./handlers/handlepass";
import CountdownTimer from "./countdownTimer";

class Fizzbuzz extends Component {
  state = {
    number: Math.floor(Math.random() * 100 + 1),
    message: "",
    count: 0,
    debugElement: 1,
  };

  handleRefresh = () => {
    //re-roll number
    this.setState({
      number: Math.floor((Math.random() * 100 + 1) * this.state.debugElement),
    });
    // setTimeout(() => this.handleRefresh(), 3000);
  };

  buttonHandleFizzbuzz = () => {
    this.setState(
      (previousState) => ({
        message: handleFizzbuzz(this.state.number),
      }),
      () => {
        this.updateCounter();
      }
    );
  };

  buttonHandleFizz = () => {
    this.setState(
      (previousState) => ({
        message: handleFizz(this.state.number),
      }),
      () => {
        this.updateCounter();
      }
    );
  };

  buttonHandleBuzz = () => {
    this.setState(
      (previousState) => ({
        message: handleBuzz(this.state.number),
      }),
      () => {
        this.updateCounter();
      }
    );
  };

  buttonHandlePass = () => {
    this.setState(
      (previousState) => ({
        message: handlePass(this.state.number),
      }),
      () => {
        this.updateCounter();
      }
    );
  };

  updateCounter = () => {
    if (this.state.message === "Correct")
      this.setState((state) => {
        return { count: state.count + 1 };
      });
    this.handleRefresh();
  };

  // handleTimer = () => {
  //   const THREE_SECONDS_IN_MS = 3000;
  //   const NOW_IN_MS = new Date().getTime();
  //   const dateTimeAfterThreeSeconds = NOW_IN_MS + THREE_SECONDS_IN_MS;
  //   return dateTimeAfterThreeSeconds;
  // };

  render() {
    return (
      <React.Fragment>
        {/* <div>
          <CountdownTimer targetdate={this.handleTimer} />
        </div> */}
        <span style={{ fontSize: 15 }} className="badge bg-danger m-3">
          {this.state.count}
        </span>
        <br />
        <button
          onClick={this.handleRefresh}
          className="btn btn btn-warning m-3"
        >
          Refresh
        </button>
        <span style={{ fontSize: 50 }} className="badge bg-primary m-3">
          {this.state.number}
        </span>
        <button
          onClick={this.buttonHandleFizz}
          className="btn btn btn-secondary m-3"
        >
          Fizz
        </button>
        <button
          onClick={this.buttonHandleBuzz}
          className="btn btn btn-secondary m-3"
        >
          Buzz
        </button>
        <button
          onClick={this.buttonHandleFizzbuzz}
          className="btn btn btn-secondary m-3"
        >
          Fizzbuzz
        </button>
        <button
          onClick={this.buttonHandlePass}
          className="btn btn btn-secondary m-3"
        >
          Pass
        </button>
        <br />
        {this.state.message}
      </React.Fragment>
    );
  }
}

export default Fizzbuzz;
