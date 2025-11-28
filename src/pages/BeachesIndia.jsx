import React from "react";
import HolidayDetailTemplate from "./HolidayDetailTemplate";

// Banner Image
import beachesIndiaBanner from "../assets/beachesIndiaBanner.jpg";

// Beach Images
import goa from "../assets/beachIndia1.jpg";
import kovalam from "../assets/beachIndia2.jpg";
import puri from "../assets/beachIndia3.jpg";
import rk from "../assets/beachIndia4.jpg";
import marina from "../assets/beachIndia5.jpg";
import visakhapatnam from "../assets/beachIndia6.jpg";

const FamousBeachesIndia = () => {
  return (
    <HolidayDetailTemplate
      banner={beachesIndiaBanner}
      title="Famous Beaches"
      subtitle="Famous Beaches in India"
      cards={[
        {
          name: "Calangute Beach, Goa",
          image: goa,
          text: `
            Nearest Airport: Goa International Airport (38 km)
            Nearest Railway Station: Thivim (19 km)
            Tourist Attractions: Water Sports, Nightlife, Baga Beach, Fort Aguada.
            Food: Goan Fish Curry, Bebinca, Pork Vindaloo, Seafood Platters.
          `,
        },
        {
          name: "Kovalam Beach, Kerala",
          image: kovalam,
          text: `
            Nearest Airport: Trivandrum Airport (15 km)
            Nearest Railway Station: Trivandrum Central (12 km)
            Tourist Attractions: Lighthouse Beach, Hawa Beach, Ayurveda Centers.
            Food: Kerala Seafood, Appam with Stew, Prawn Curry.
          `,
        },
        {
          name: "Puri Beach, Odisha",
          image: puri,
          text: `
            Nearest Airport: Bhubaneswar Airport (60 km)
            Nearest Railway Station: Puri Railway Station (2 km)
            Tourist Attractions: Jagannath Temple, Golden Beach, Marine Drive.
            Food: Odisha Thali, Prawn Malai Curry, Rasagola.
          `,
        },
        {
          name: "RK Beach, Visakhapatnam",
          image: rk,
          text: `
            Nearest Airport: Visakhapatnam Airport (12 km)
            Nearest Railway Station: Visakhapatnam Junction (6 km)
            Tourist Attractions: Submarine Museum, Kailasagiri, Fishing Harbor.
            Food: Andhra Seafood, Bamboo Chicken, Prawn Fry.
          `,
        },
        {
          name: "Marina Beach, Chennai",
          image: marina,
          text: `
            Nearest Airport: Chennai International Airport (18 km)
            Nearest Railway Station: Chennai Central (5 km)
            Tourist Attractions: Marina Lighthouse, Aquarium, Beach Walk.
            Food: Sundal, Murukku, South Indian Snacks, Seafood.
          `,
        },
        {
          name: "Rishikonda Beach, Visakhapatnam",
          image: visakhapatnam,
          text: `
            Nearest Airport: Visakhapatnam Airport (15 km)
            Nearest Railway Station: Visakhapatnam Junction (10 km)
            Tourist Attractions: Water Sports, Hill Viewpoints, Ropeway.
            Food: Andhra Meals, Prawns, Fish Fry.
          `,
        }
      ]}
    />
  );
};

export default FamousBeachesIndia;
