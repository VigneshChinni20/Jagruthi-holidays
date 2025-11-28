import React from "react";
import HolidayDetailTemplate from "./HolidayDetailTemplate";

// Banner Image
import hillsIndiaBanner from "../assets/hillsIndiaBanner.jpg";

// Images for hill stations
import manali from "../assets/hillIndia1.jpg";
import ooty from "../assets/hillIndia2.jpg";
import munnar from "../assets/hillIndia3.jpg";
import darjeeling from "../assets/hillIndia4.jpg";
import kodai from "../assets/hillIndia5.jpg";
import shimla from "../assets/hillIndia6.jpg";

const FamousHillStationsIndia = () => {
  return (
    <HolidayDetailTemplate
      banner={hillsIndiaBanner}
      title="Famous Hills"
      subtitle="Famous Hill Stations in India"
      cards={[
        {
          name: "Manali, Himachal Pradesh",
          image: manali,
          text: `
            Nearest Airport: Bhuntar Airport (50 km)
            Nearest Railway Station: Joginder Nagar (162 km)
            Tourist Attractions: Solang Valley, Rohtang Pass, Hadimba Temple, Mall Road.
            Food: Siddu, Momos, Thukpa, local Himachali cuisine.
          `,
        },
        {
          name: "Ooty, Tamil Nadu",
          image: ooty,
          text: `
            Nearest Airport: Coimbatore Airport (95 km)
            Nearest Railway Station: Ooty Railway Station (1 km)
            Tourist Attractions: Botanical Garden, Ooty Lake, Doddabetta Peak, Tea Factory.
            Food: South Indian dishes, Ooty chocolates, Varkey.
          `,
        },
        {
          name: "Munnar, Kerala",
          image: munnar,
          text: `
            Nearest Airport: Kochi Airport (110 km)
            Nearest Railway Station: Aluva (110 km)
            Tourist Attractions: Tea Estates, Eravikulam National Park, Echo Point, Anamudi Peak.
            Food: Kerala cuisine, Appam, Puttu, Tea-based snacks.
          `,
        },
        {
          name: "Darjeeling, West Bengal",
          image: darjeeling,
          text: `
            Nearest Airport: Bagdogra Airport (70 km)
            Nearest Railway Station: New Jalpaiguri (73 km)
            Tourist Attractions: Tiger Hill, Batasia Loop, Toy Train Ride, Tea Gardens.
            Food: Momos, Thukpa, Darjeeling Tea, Noodles.
          `,
        },
        {
          name: "Kodaikanal, Tamil Nadu",
          image: kodai,
          text: `
            Nearest Airport: Madurai Airport (120 km)
            Nearest Railway Station: Kodai Road (80 km)
            Tourist Attractions: Kodaikanal Lake, Coaker's Walk, Green Valley View.
            Food: South Indian meals, homemade chocolates, breads.
          `,
        },
        {
          name: "Shimla, Himachal Pradesh",
          image: shimla,
          text: `
            Nearest Airport: Jubbarhatti Airport (22 km)
            Nearest Railway Station: Kalka (89 km)
            Tourist Attractions: Mall Road, Jakhoo Temple, Kufri, Christ Church.
            Food: Chana Madra, Siddu, Himachali Dham, street snacks.
          `,
        }
      ]}
    />
  );
};

export default FamousHillStationsIndia;
