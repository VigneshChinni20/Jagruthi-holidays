import React from "react";
import HolidayDetailTemplate from "./HolidayDetailTemplate";

// Banner image for the page
import religiousOutsideBanner from "../assets/religiousOutsideBanner.jpg";

// Images for places
import mecca from "../assets/religiousOut1.jpg";
import vatican from "../assets/religiousOut2.jpg";
import buddhastatue from "../assets/religiousOut3.jpg";
import jerusalem from "../assets/religiousOut4.jpg";
import angkorWat from "../assets/religiousOut5.jpg";
import goldenRock from "../assets/religiousOut6.jpg";

const FamousReligiousPlacesOutsideIndia = () => {
  return (
    <HolidayDetailTemplate
      banner={religiousOutsideBanner}
      title="Famous Religious Places"
      subtitle="Most Visited Spiritual Places Outside India"
      cards={[
        {
          name: "Masjid al-Haram, Mecca",
          image: mecca,
          text: `
            Location: Saudi Arabia
            Highlights: The Kaaba, Hajj pilgrimage, world’s largest mosque.
            Best For: Muslim pilgrims, spiritual seekers.
          `,
        },
        {
          name: "St. Peter’s Basilica, Vatican City",
          image: vatican,
          text: `
            Location: Vatican City
            Highlights: Renaissance architecture, Pope’s residence, Sistine Chapel nearby.
            Best For: Christians, art lovers, history enthusiasts.
          `,
        },
        {
          name: "Great Buddha of Thailand",
          image: buddhastatue,
          text: `
            Location: Ang Thong, Thailand
            Highlights: 92-meter Buddha statue, peaceful surroundings, meditation sites.
            Best For: Buddhists, photography lovers, peace seekers.
          `,
        },
        {
          name: "Jerusalem Old City",
          image: jerusalem,
          text: `
            Location: Israel
            Highlights: Western Wall, Church of Holy Sepulchre, Dome of the Rock.
            Best For: Christian, Muslim & Jewish pilgrims, culture enthusiasts.
          `,
        },
        {
          name: "Angkor Wat",
          image: angkorWat,
          text: `
            Location: Cambodia
            Highlights: World’s largest temple complex, sunrise views, Hindu-Buddhist architecture.
            Best For: History lovers, photographers, spiritual travelers.
          `,
        },
        {
          name: "Golden Rock Pagoda (Kyaiktiyo Pagoda)",
          image: goldenRock,
          text: `
            Location: Myanmar
            Highlights: Gravity-defying golden boulder, mountain pilgrimage trail.
            Best For: Buddhists, trekkers, adventure travelers.
          `,
        },
      ]}
    />
  );
};

export default FamousReligiousPlacesOutsideIndia;
