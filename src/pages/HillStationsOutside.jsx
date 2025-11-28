import React from "react";
import HolidayDetailTemplate from "./HolidayDetailTemplate";

// Banner image
import hillsOutsideBanner from "../assets/hillsOutsideBanner.jpg";

// Hill images
import swissAlps from "../assets/hillOut1.jpg";
import banff from "../assets/hillOut2.jpg";
import tableMountain from "../assets/hillOut3.jpg";
import mountFuji from "../assets/hillOut4.jpg";
import rockyMountains from "../assets/hillOut5.jpg";
import himalayasNepal from "../assets/hillOut6.jpg";

const FamousHillsOutsideIndia = () => {
  return (
    <HolidayDetailTemplate
      banner={hillsOutsideBanner}
      title="Famous Hills"
      subtitle="Famous Hill Stations Outside India"
      cards={[
        {
          name: "Swiss Alps",
          image: swissAlps,
          text: `
            Location: Switzerland
            Best Time to Visit: December to March for snow, June to September for greenery.
            Highlights: Jungfrau, Matterhorn, skiing, scenic train rides.
            Experiences: Snow sports, lakes, mountain villages, chocolate tasting.
          `,
        },
        {
          name: "Banff & Canadian Rockies",
          image: banff,
          text: `
            Location: Alberta, Canada
            Best Time: June to August, December to February (winter sports)
            Highlights: Lake Louise, Moraine Lake, hot springs, wildlife.
            Experiences: Hiking, gondola rides, glacier walks.
          `,
        },
        {
          name: "Table Mountain",
          image: tableMountain,
          text: `
            Location: Cape Town, South Africa
            Best Time: October to April
            Highlights: Flat summit, cable car, panoramic ocean + city views.
            Experiences: Hiking, photography, nature trails.
          `,
        },
        {
          name: "Mount Fuji",
          image: mountFuji,
          text: `
            Location: Honshu, Japan
            Best Time: July to September (Climbing season)
            Highlights: Sacred mountain, beautiful symmetry, Fuji Five Lakes.
            Experiences: Trekking, shrines, onsen hot springs.
          `,
        },
        {
          name: "Rocky Mountains (USA)",
          image: rockyMountains,
          text: `
            Location: Colorado, USA
            Best Time: June to October
            Highlights: Trail Ridge Road, alpine lakes, elk, forest trails.
            Experiences: Hiking, mountain biking, skiing.
          `,
        },
        {
          name: "Himalayas – Nepal Side",
          image: himalayasNepal,
          text: `
            Location: Nepal
            Best Time: September to November
            Highlights: Everest, Annapurna, Pokhara lake valley.
            Experiences: Trekking, paragliding, monasteries.
          `,
        },
      ]}
    />
  );
};

export default FamousHillsOutsideIndia;
