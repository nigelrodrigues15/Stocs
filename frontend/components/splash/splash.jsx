import React from "react";

const splash = () => {
  return (
    <div className="splash">
      <div className="item-1-1">
        <div>
          <h1>
            Investing.
            <br /> Now for the rest of us.
          </h1>
          <br />
          <p>
            Stocs lets you learn to invest in the stock market for free.
          </p>
        </div>
      </div>
      <div className="item-1-2">
        <img src={window.images.splash1} />
      </div>
      <div className="item-2-1">
        <div>
          <h1>Invest for free.</h1>
          <br />
          <p>
            We believe that the financial system should work for the rest of us,
            not just the wealthy. 
          </p>
        </div>
      </div>
      <div className="item-2-2">
        <img src={window.images.splash2} />
      </div>
      <div className="item-3-1">
        <div>
          <h1>Learn by doing.</h1>
          <br />
          <p>
            With Stocs, you can learn to invest in the stock market as you
            build out your portfolio.
          </p>
        </div>
      </div>
      <div className="item-3-2">
        <img src={window.images.splash3} />
      </div>
      <div className="item-4-1">
        <div>
          <h1>Experiment.<br /> Now with zero risk.</h1>
          <br />
          <p>
            Using virtual money, you can learn investing without having to worry about the risks.
          </p>
        </div>
      </div>
      <div className="item-2-2">
        <img src={window.images.splash4} />
      </div>
    </div>
  );
};

export default splash;
