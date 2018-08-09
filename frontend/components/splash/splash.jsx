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
          <p>
            Robinhood lets you learn to invest in the stock market for free.
          </p>
        </div>
      </div>
      <div className="item-1-2">
        <img src={window.images.splash1} />
      </div>
      <div className="item-2-1">
        <div>
          <h1>Invest for free.</h1>
          <p>
            We believe that the financial system should work for the rest of us,
            not just the wealthy. We’ve cut the fat that makes other brokerages
            costly, like manual account management and hundreds of storefront
            locations, so we can offer zero commission trading.
          </p>
        </div>
      </div>
      <div className="item-2-2">
        <img src={window.images.splash2} />
      </div>
      <div className="item-3-1">
        <div>
          <h1>Learn by doing.</h1>
          <p>
            With Robinhood, you can learn to invest in the stock market as you
            build out your portfolio. Discover new stocks through Collections,
            track your favorites with a personalized news feed, and more.
          </p>
        </div>
      </div>
      <div className="item-3-2">
        <img src={window.images.splash3} />
      </div>
    </div>
  );
};

export default splash;
