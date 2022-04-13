import React from "react";
import millify from "millify";
import "../../styles/Homepage.css";

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="stats">
        <h1 className="stats__heading">Global Crypto Stats</h1>

        <div className="stats__container">
          <div className="stats__item">
            <span className="stats__item-info">Total Cryptocurrencies</span>
            <p className="stats__item-value">5</p>
          </div>
          <div className="stats__item">
            <span className="stats__item-info">Total Market Cap</span>
            <p className="stats__item-value">5</p>
          </div>
          <div className="stats__item">
            <span className="stats__item-info">Total Markets</span>
            <p className="stats__item-value">5</p>
          </div>
          <div className="stats__item">
            <span className="stats__item-info">Total Exchanges</span>
            <p className="stats__item-value">5</p>
          </div>
          <div className="stats__item">
            <span className="stats__item-info">Total 24h Volume</span>
            <p className="stats__item-value">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
