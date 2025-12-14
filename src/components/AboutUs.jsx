import React from "react";
import "./AboutUs.css";
import aboutImage from "../assets/about-banner.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">

      {/* TOP HEADING SECTION */}
      <section className="about-heading">
        <h1>Welcome to JAGRUTHI PROPERTY DEVELOPERS & HOLIDAYS</h1>
        <p>Your trusted travel companion for unforgettable journeys.</p>
      </section>

      {/* BOTTOM CONTENT SIDE-BY-SIDE */}
      <div className="about-content-wrapper">

        {/* LEFT TEXT */}
        <div className="about-left">
          <p>
            JAGRUTHI PROPERTY DEVELOPERS & HOLIDAYS your ultimate destination for
            tourism, fitness, and amusement! We started our venture in 2018 July 
            before COVID from Kolkata (city of Joy). And opened our office at 
            Kolkata with our great vision, and now we have 10 plus branches in 
            South -west- North. We are dedicated to creating a perfect blend of 
            adventure, wellness, and fun, offering unique experiences that 
            energize your body, refresh your mind, and feed your soul.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-right">
          <img src={aboutImage} alt="" />
        </div>

      </div>

      {/* ========================= */}
      {/*     WHAT WE OFFER        */}
      {/* ========================= */}

      <div className="offer-section">
        <h2>What We Offer</h2>

        <div className="divider">
          <span></span><span></span><span></span>
        </div>

        <div className="offer-cards">

          {/* Tourism */}
          <div className="offer-card">
            <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" alt="Tourism" />
            <h3>Tourism</h3>
            <p>
              Explore breathtaking locations, immerse yourself in diverse cultures, and discover
              hidden gems. From scenic getaways to bustling adventures—beaches, hills, religious
              places—we create tailor-made travel experiences for every kind of explorer.
            </p>
          </div>

          {/* Fitness */}
          <div className="offer-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1048/1048945.png" alt="Fitness" />
            <h3>Fitness</h3>
            <p>
              Stay active during your journey! Yoga, trekking, guided fitness sessions—we combine
              wellness with exploration to energize your body, refresh your mind, and promote a
              healthier travel experience.
            </p>
          </div>

          {/* Amusement */}
          <div className="offer-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3430/3430401.png" alt="Amusement" />
            <h3>Amusement</h3>
            <p>
              From theme parks to thrilling outdoor activities like swimming, kid's play areas,
              summer camps—our amusement options promise endless fun for families, friends, and
              adventure lovers.
            </p>
          </div>

        </div>
      </div>

<div className="choose-section">
  <h2>Why Choose Us?</h2>

  <div className="divider">
    <span></span><span></span><span></span>
  </div>

  <p className="choose-subtitle">
    Unique Experiences: We combine travel, health, and entertainment to craft a journey like no other.
  </p>
  <p className="choose-subtitle">
    Professional Guidance: Our team of travel experts, fitness trainers, and activity coordinators ensure a seamless experience.
  </p>

  <div className="choose-cards">

    {/* Customer Support */}
    <div className="choose-card">
      <img src="https://cdn-icons-png.flaticon.com/512/1027/1027853.png" alt="Support" />
      <h3>Customer Support.</h3>
      <p>
        Our customer support team will always guide your travel plans, handle queries, and help solve problems.
        24/7 dedicated support is available for our members.
      </p>
    </div>

    {/* All-in-One Membership */}
    <div className="choose-card">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" alt="Membership" />
      <h3>All-in-One Membership</h3>
      <p>
        Enjoy the convenience of a comprehensive membership including accommodations, activities, and wellness programs.
      </p>
    </div>

    {/* Focus on Well-being */}
    <div className="choose-card">
      <img src="https://cdn-icons-png.flaticon.com/512/4229/4229338.png" alt="Well-being" />
      <h3>Focus on Well-being</h3>
      <p>
        Our goal is to provide experiences that not only entertain but rejuvenate and inspire you.
      </p>
    </div>

  </div>
</div>

<div className="vision-section">
  <h2>Our Vision</h2>

  <p>
    To become the most trusted and preferred service provider in the tourism industry,
    offering unparalleled experiences to every type of traveler in India.  
    We aim to exceed customer expectations through personalized services,  
    celebrate the diversity of India’s culture and landscapes, and deliver  
    satisfaction-driven travel solutions that resonate with both domestic and  
    international audiences.
  </p>
</div>

<div className="mission-section">
  <h2>Our Mission</h2>

  <p>
    At JAGRUTHI HOLIDAYS, we believe life is a journey meant to be lived to the fullest.
    Whether you're seeking relaxation, adventure, or personal growth,  
    we are here to guide you every step of the way.
  </p>
</div>

    </div>
  );
};

export default AboutUs;
