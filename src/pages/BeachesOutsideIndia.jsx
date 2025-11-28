import React from "react";
import HolidayDetailTemplate from "./HolidayDetailTemplate";

// Banner Image
import beachesOutsideBanner from "../assets/beachesOutsideBanner.jpg";

// Beach Images (you will replace these with your images)
import whitehaven from "../assets/beachesOutside1.jpg";
import bondi from "../assets/beachesOutside2.jpg";
import pinkSands from "../assets/beachesOutside3.jpg";
import mayaBay from "../assets/beachesOutside4.jpg";
import navagio from "../assets/beachesOutside5.jpg";
import waikiki from "../assets/beachesOutside6.jpg";

const FamousBeachesOutsideIndia = () => {
  return (
    <HolidayDetailTemplate
      banner={beachesOutsideBanner}
      title="Famous Beaches"
      subtitle="Famous Beaches Outside India"
      cards={[
        {
          name: "Whitehaven Beach – Australia",
          image: whitehaven,
          text: `
            Nearest Airport: Hamilton Island Airport (16 km)
            Nearest Port: Airlie Beach Marina (25 km)
            Tourist Attractions: Silica Sand, Hill Inlet Lookout, Snorkeling.
            Food: Tropical Fruits, Seafood Platters, Aussie Barbecue.
          `,
        },
        {
          name: "Bondi Beach – Australia",
          image: bondi,
          text: `
            Nearest Airport: Sydney International Airport (13 km)
            Nearest Railway Station: Bondi Junction Station (3 km)
            Tourist Attractions: Surfing, Bondi Icebergs, Coastal Walk.
            Food: Fish & Chips, Avocado Toast, Fresh Juices.
          `,
        },
        {
          name: "Pink Sands Beach – Bahamas",
          image: pinkSands,
          text: `
            Nearest Airport: North Eleuthera Airport (10 km)
            Nearest Port: Harbour Island Marina (5 km)
            Tourist Attractions: Pink Sand, Snorkeling, Marine Life.
            Food: Caribbean Seafood, Conch Salad, Coconut Desserts.
          `,
        },
        {
          name: "Maya Bay – Thailand",
          image: mayaBay,
          text: `
            Nearest Airport: Phuket International Airport (46 km)
            Nearest Port: Phi Phi Don Pier (5 km)
            Tourist Attractions: Limestone Cliffs, Crystal Lagoon, Marine Life.
            Food: Thai Seafood, Pad Thai, Mango Sticky Rice.
          `,
        },
        {
          name: "Navagio Beach (Shipwreck Beach) – Greece",
          image: navagio,
          text: `
            Nearest Airport: Zakynthos Airport (34 km)
            Nearest Port: Porto Vromi (15 km)
            Tourist Attractions: Shipwreck, Cliff Views, Boat Tours.
            Food: Greek Salad, Seafood, Souvlaki, Baklava.
          `,
        },
        {
          name: "Waikiki Beach – Hawaii, USA",
          image: waikiki,
          text: `
            Nearest Airport: Honolulu International Airport (15 km)
            Nearest City: Honolulu Downtown (4 km)
            Tourist Attractions: Surfing, Diamond Head, Luxury Resorts.
            Food: Hawaiian BBQ, Poke Bowls, Pineapple Dishes.
          `,
        }
      ]}
    />
  );
};

export default FamousBeachesOutsideIndia;
