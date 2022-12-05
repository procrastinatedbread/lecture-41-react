import React from "react";

const JsxLearn = () => {
  let funnyNumber = 7;
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  return (
    <div>
      <p>
        This is some randomNumber:
        {Math.floor(Math.random() * 10 + 1)}
      </p>
      <p>Random Number: {randomNumber}</p>
      {randomNumber === funnyNumber ? (
        <img
          style={{ width: "150px" }}
          src="https://media.tenor.com/URUR582evd0AAAAM/victory-winning.gif"
        ></img>
      ) : (
        <p>You didn't win</p>
      )}
    </div>
  );
};

export default JsxLearn;
