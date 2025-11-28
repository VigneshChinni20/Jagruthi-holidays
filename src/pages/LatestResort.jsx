import React from "react";
import HolidayDetailTemplate from "./HolidayDetailTemplate";

import resortsBanner from "../assets/resortsBanner.jpg";

// Insert your images here
import tajExotica from "../assets/resort1.jpg";
import leelaUdaipur from "../assets/resort2.jpg";
import evolveBack from "../assets/resort3.jpg";
import itcGoa from "../assets/resort4.jpg";
import amanbagh from "../assets/resort5.jpg";
import kumarakom from "../assets/resort6.jpg";

const LatestResortsIndia = () => {
  return (
    <HolidayDetailTemplate
      banner={resortsBanner}
      title="Luxury Resorts"
      subtitle="Best Luxury Resorts in India"
      cards={[
        {
          name: "Taj Exotica Resort & Spa",
          image: tajExotica,
          text: `
            Location: Goa
            Highlights: Private beach access, luxury villas, world-class spa, fine dining restaurants.
            Best For: Honeymoon, family vacations, luxury stays.
          `,
        },
        {
          name: "The Leela Palace Udaipur",
          image: leelaUdaipur,
          text: `
            Location: Udaipur, Rajasthan
            Highlights: Lake Pichola views, royal suites, boat rides, heritage architecture.
            Best For: Couples, royal stay experience, photography.
          `,
        },
        {
          name: "Evolve Back Coorg",
          image: evolveBack,
          text: `
            Location: Coorg, Karnataka
            Highlights: Forest villas, private pools, coffee plantation tours, nature activities.
            Best For: Nature lovers, peaceful luxury retreats.
          `,
        },
        {
          name: "ITC Grand Goa",
          image: itcGoa,
          text: `
            Location: South Goa
            Highlights: Indo-Portuguese architecture, lagoons, spa, elegant dining, beachfront.
            Best For: Family trips, premium resort experience.
          `,
        },
        {
          name: "Amanbagh Resort Rajasthan",
          image: amanbagh,
          text: `
            Location: Alwar, Rajasthan
            Highlights: Secluded luxury, desert safaris, royal villas, wellness therapies.
            Best For: Peaceful luxury and heritage experience.
          `,
        },
        {
          name: "Kumarakom Lake Resort",
          image: kumarakom,
          text: `
            Location: Kerala
            Highlights: Backwater views, infinity pools, houseboat stay, Ayurveda spa.
            Best For: Relaxation, honeymoon, heritage luxury.
          `,
        },
      ]}
    />
  );
};

export default LatestResortsIndia;
