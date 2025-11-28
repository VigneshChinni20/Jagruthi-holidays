import "./TravelSection.css";
import TwB from "../assets/TwB.jpg";

const TravelSection = () => {
  return (
    <div className="travel-container">
      <img src={TwB} alt="travel" className="travel-img" />

      <div className="travel-text">
        <h1>
          Travel with <span className="highlight">Jagruthi Property Developers & Holidays</span>
        </h1>

        <p>
          Jagruthi (India) invites you to discover the mesmerizing beauty of our Indian subcontinent. Combining the cultural splendors of India with the snow covered Himalayan peaks of Nepal, the serenity of Bhutan, green tea estates of Sri Lanka and the turquoise beaches of Maldives, the Indian sub continent treasures it all. When travelling to India, it is worth taking a short trip to a neighboring country, to enhance your experience. You will notice a striking similarity, yet subtle differences in the people, food, culture, religion and lifestyle in the entire Indian subcontinent. It is in these differences that we celebrate the ‘unity in diversity’ of our land.
        </p>
      </div>
    </div>
  );
};

export default TravelSection;
