import React, { Component } from "react";

const handleFizzbuzz = (number) => {
    let outputMessage = "";
    if (number % 3 === 0 && number % 5 === 0)
        outputMessage = "Correct";
    if (number % 3 !== 0 && number % 5 !== 0)
        outputMessage = "Incorrect";
    if (number % 3 === 0 && number % 5 !== 0)
        outputMessage = "Incorrect";
    if (number % 3 !== 0 && number % 5 === 0)
        outputMessage = "Incorrect";
    return outputMessage;
};

export default handleFizzbuzz;
