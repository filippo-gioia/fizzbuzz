import React, { Component } from "react";

const handleFizz = (number) => {
  let outputMessage = "";
  if (number % 3 === 0) outputMessage = "Correct";
  if (number % 3 === 0 && number % 5 === 0)
    outputMessage = "This is also divisible by 5!";
  if (number % 3 !== 0) outputMessage = "Incorrect";
  return outputMessage;
};

export default handleFizz;
