import React from "react";
import HolidayDetailTemplate from "./HolidayDetailTemplate";

import jungleBanner from "../assets/junglebanner.jpg";

import ranthambore from "../assets/jungle1.jpg";
import corbett from "../assets/jungle2.jpg";
import gir from "../assets/jungle3.jpg";
import kaziranga from "../assets/jungle4.jpg";
import sundarbans from "../assets/jungle5.jpg";
import bandipur from "../assets/jungle6.jpg";

const IndianJungles = () => {
  return (
    <HolidayDetailTemplate
      banner={jungleBanner}
      title="Famous Jungles"
      subtitle="Famous Jungles In India"
      cards={[
        {
          image: ranthambore,
          name: "Ranthambore National Park",
          text: `Nearest Airport: Jaipur International Airport (180 km)
Nearest Railway Station: Sawai Madhopur Railway Station (11 km)
Tourist Attractions: Ranthambore Fort, Trinetra Ganesh Temple, Surwal Lake, Raj Bagh Ruins, and more.
Food: Dal Baati Churma, Ker Sangri, Gatte Ki Sabzi, and more.`,
        },
        {
          image: corbett,
          name: "Jim Corbett National Park",
          text: `Nearest Airport: Pantnagar Airport (50 km)
Nearest Railway Station: Ramnagar Railway Station (3 km)
Tourist Attractions: Corbett Museum, Garjiya Devi Temple, and more.
Food: Local Kumaoni Cuisine, Aloo Ke Gutke, Bhatt Ki Churkani, Kachori, Thepla, and more.`,
        },
        {
          image: gir,
          name: "Gir Wildlife Sanctuary",
          text: `Nearest Airport: Diu Airport (100 km)
Nearest Railway Station: Junagadh Railway Station (65 km)
Tourist Attractions: Asiatic Lion Safari, Devaliya Safari Park, Sasan Gir Museum, Kamleshwar Dam, and more.
Food: Gujarati Thali, Dhokla, Khandvi, Patra, Thepla, and more.`,
        },
        {
          name: "Kaziranga National Park",
          image: kaziranga,
          text: `
            Nearest Airport: Jorhat Airport (97 km)
            Nearest Railway Station: Furkating Junction (75 km)
            Tourist Attractions: One-horned Rhino Safari, Elephant Ride,
            Kaziranga National Orchid Park, Tea Gardens, Jeep Safari, and more.
            Food: Assamese Thali, Fish Curry, Smoked Meat, Rice Beer, and more.
          `
        },
        {
          name: "Sundarbans National Park",
          image: sundarbans,
          text: `
            Nearest Airport: Kolkata NSC Airport (120 km)
            Nearest Railway Station: Canning Railway Station (48 km)
            Tourist Attractions: Bengal Tiger Reserve, Mangrove Boat Safari,
            Dobanki Watchtower, Sajnekhali Bird Sanctuary, Eco Museum, and more.
            Food: Bengali Thali, Fish Curry, Prawns, Coconut-based Dishes, and more.
          `
        },
        {
          name: "Bandipur National Park",
          image: bandipur,
          text: `
            Nearest Airport: Mysore Airport (73 km)
            Nearest Railway Station: Mysore Junction (80 km)
            Tourist Attractions: Tiger Safari, Gopalaswamy Betta,
            Elephant Camps, Bird Watching Trails, Jeep Safari, and more.
            Food: Karnataka Cuisine, Ragi Mudde, Rice Meals, and more.
          `
        }
      ]}
    />
  );
};

export default IndianJungles;
