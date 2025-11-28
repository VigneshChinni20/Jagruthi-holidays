import React from "react";
import HolidayDetailTemplate from "./HolidayDetailTemplate";

// Banner image for the page
import religiousBanner from "../assets/religiousBanner.jpg";

// Religious places images
import tirupati from "../assets/religious1.jpg";
import kedarnath from "../assets/religious2.jpg";
import vaishnoDevi from "../assets/religious3.jpg";
import goldenTemple from "../assets/religious4.jpg";
import meenakshi from "../assets/religious5.jpg";
import jagannath from "../assets/religious6.jpg";

const FamousReligiousPlacesIndia = () => {
  return (
    <HolidayDetailTemplate
      banner={religiousBanner}
      title="Famous Religious Places"
      subtitle="Most Visited Spiritual Destinations in India"
      cards={[
        {
          name: "Tirupati Balaji Temple",
          image: tirupati,
          text: `
            Location: Andhra Pradesh
            Highlights: One of the richest temples in India, sacred darshan, laddoo prasadam.
            Best For: Hindu devotees, spiritual seekers, family pilgrimage.
          `,
        },
        {
          name: "Kedarnath Temple",
          image: kedarnath,
          text: `
            Location: Uttarakhand
            Highlights: Himalayan temple, spiritual trek, scenic mountains, Jyotirlinga.
            Best For: Trekking pilgrims, Shiva devotees, nature lovers.
          `,
        },
        {
          name: "Vaishno Devi Temple",
          image: vaishnoDevi,
          text: `
            Location: Jammu & Kashmir
            Highlights: 13 km pilgrimage trek, holy cave darshan, spiritual energy.
            Best For: Families, devotees of Mata Rani, trekking pilgrims.
          `,
        },
        {
          name: "Golden Temple (Harmandir Sahib)",
          image: goldenTemple,
          text: `
            Location: Amritsar, Punjab
            Highlights: Golden shrine, peaceful sarovar, langar service, Sikh religion center.
            Best For: Peace seekers, photographers, cultural tourism.
          `,
        },
        {
          name: "Meenakshi Amman Temple",
          image: meenakshi,
          text: `
            Location: Madurai, Tamil Nadu
            Highlights: Dravidian architecture, colorful gopurams, historic carvings.
            Best For: History lovers, architecture fans, cultural exploration.
          `,
        },
        {
          name: "Jagannath Temple",
          image: jagannath,
          text: `
            Location: Puri, Odisha
            Highlights: Rath Yatra festival, ancient rituals, Mahaprasad, sacred temple.
            Best For: Hindu pilgrims, culture lovers, festival voyagers.
          `,
        },
      ]}
    />
  );
};

export default FamousReligiousPlacesIndia;
