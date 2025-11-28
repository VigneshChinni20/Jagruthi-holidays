import React from "react";
import "./HolidayDetailTemplate.css";

const HolidayDetailTemplate = ({ banner, title, subtitle, cards }) => {
  return (
    <div className="holiday-detail">
      <div
        className="holiday-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1>{title}</h1>
      </div>

      <h2 className="holiday-subtitle">{subtitle}</h2>

      <div className="holiday-cards">
        {cards.map((card, index) => (
          <div className="holiday-card" key={index}>
            <img src={card.image} alt={card.name} />
            <h3>{card.name}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    <div id="contact"></div>

    </div>
  );
};

export default HolidayDetailTemplate;
