import React, { Component } from "react";
import handleFizz from "./handlers";

class Fizzbuzz extends Component {
  state = {
    number: Math.floor(Math.random() * 100 + 1),
    message: "",
    count: 0,
    debutElement: 3,
  };

  handleRefresh = () => {
    //re-roll number
    this.setState({
      number: Math.floor((Math.random() * 100 + 1) * this.state.debutElement),
    });
  };

  handleFizzbuzz = () => {
    if (this.state.number % 3 === 0 && this.state.number % 5 === 0)
      this.setState({ message: "Correct" });
    if (this.state.number % 3 !== 0 && this.state.number % 5 !== 0)
      this.setState({ message: "Incorrect" });
    if (this.state.number % 3 === 0 && this.state.number % 5 !== 0)
      this.setState({ message: "Incorrect" });
    if (this.state.number % 5 === 0 && this.state.number % 3 !== 0)
      this.setState({ message: "Incorrect" });
  };

  //   handleFizz = () => {
  //     if (this.state.number % 3 === 0) this.setState({ message: "Correct" });
  //     if (this.state.number % 3 === 0 && this.state.number % 5 === 0)
  //       this.setState({ message: "This is also divisible by 5!" });
  //     if (this.state.number % 3 !== 0) this.setState({ message: "Incorrect" });
  //   };

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

  handleBuzz = () => {
    if (this.state.number % 5 === 0) this.setState({ message: "Correct" });
    if (this.state.number % 3 === 0 && this.state.number % 5 === 0)
      this.setState({ message: "This is also divisible by 3!" });
    if (this.state.number % 5 !== 0) this.setState({ message: "Incorrect" });
  };

  handlePass = () => {
    if (this.state.number % 3 !== 0 && this.state.number % 5 !== 0)
      this.setState({ message: "Correct" });
    if (this.state.number % 3 === 0 && this.state.number % 5 === 0)
      this.setState({ message: "Incorrect" });
    if (this.state.number % 3 === 0 && this.state.number % 5 !== 0)
      this.setState({ message: "Incorrect" });
    if (this.state.number % 3 !== 0 && this.state.number % 5 === 0)
      this.setState({ message: "Incorrect" });
  };

  updateCounter = () => {
    if (this.state.message === "Correct")
      this.setState((state) => {
        return { count: state.count + 1 };
      });
    //   this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
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
        <button onClick={this.handleBuzz} className="btn btn btn-secondary m-3">
          Buzz
        </button>
        <button
          onClick={this.handleFizzbuzz}
          className="btn btn btn-secondary m-3"
        >
          Fizzbuzz
        </button>
        <button onClick={this.handlePass} className="btn btn btn-secondary m-3">
          Pass
        </button>
        <br />
        {this.state.message}
      </React.Fragment>
    );
  }
}

export default Fizzbuzz;
