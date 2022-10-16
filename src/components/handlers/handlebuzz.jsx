import React, { Component } from "react";

const handleBuzz = (number) => {
    let outputMessage = "";
    if (number % 5 === 0) outputMessage = "Correct";
    if (number % 3 === 0 && number % 5 === 0)
        outputMessage = "This is also divisible by 3!";
    if (number % 5 !== 0) outputMessage = "Incorrect";
    return outputMessage;
};

export default handleBuzz;
