import React from "react";
import HolidayDetailTemplate from "./HolidayDetailTemplate";

// Insert banner image for deserts
import desertBanner from "../assets/desertBanner.jpg";

// Insert your desert images here
import tharDesert from "../assets/desert1.jpg";
import raanOfKutch from "../assets/desert2.jpg";
import ladakhColdDesert from "../assets/desert3.jpg";
import spiti from "../assets/desert4.jpg";
import jaisalmer from "../assets/desert5.jpg";
import nubraValley from "../assets/desert6.jpg";

const FamousDesertsIndia = () => {
  return (
    <HolidayDetailTemplate
      banner={desertBanner}
      title="Famous Deserts"
      subtitle="Popular Deserts in India"
      cards={[
        {
          name: "Thar Desert (Great Indian Desert)",
          image: tharDesert,
          text: `
            Location: Rajasthan
            Highlights: Camel safari, desert camping, Sam Sand Dunes, cultural shows.
            Best For: Adventure, camel rides, sunset views, dune bashing.
          `,
        },
        {
          name: "Rann of Kutch (White Desert)",
          image: raanOfKutch,
          text: `
            Location: Gujarat
            Highlights: White salt desert, Rann Utsav, cultural dance, luxury tents.
            Best For: Photography, cultural tourism, night sky stargazing.
          `,
        },
        {
          name: "Cold Desert of Ladakh",
          image: ladakhColdDesert,
          text: `
            Location: Ladakh
            Highlights: Cold desert climate, Nubra dunes, double-humped camels.
            Best For: Adventure lovers, high-altitude experience, scenic landscapes.
          `,
        },
        {
          name: "Spiti Valley Cold Desert",
          image: spiti,
          text: `
            Location: Himachal Pradesh
            Highlights: Snow deserts, monasteries, off-road routes, river valley views.
            Best For: Road trips, trekking, peaceful stays, photography.
          `,
        },
        {
          name: "Jaisalmer Desert Region",
          image: jaisalmer,
          text: `
            Location: Rajasthan
            Highlights: Golden dunes, Jaisalmer Fort, Jeep safari, desert festivals.
            Best For: Camping, cultural programs, royal desert experience.
          `,
        },
        {
          name: "Nubra Valley Sand Dunes",
          image: nubraValley,
          text: `
            Location: Ladakh
            Highlights: Sand dunes at high altitude, Bactrian camels, scenic valley.
            Best For: Adventure, photography, unique desert experience.
          `,
        },
      ]}
    />
  );
};

export default FamousDesertsIndia;
