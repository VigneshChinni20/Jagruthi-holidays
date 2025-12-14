import React from "react";
import "./HolidayDestination.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";



import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelopeOpenText } from "react-icons/fa";


import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import user6 from "../assets/user6.jpg";
import user7 from "../assets/user7.jpg";
import user8 from "../assets/user8.jpg";

import holiday1 from "../assets/holiday1.jpg";
import holiday2 from "../assets/holiday2.jpg";
import holiday3 from "../assets/holiday3.jpg";
import holiday4 from "../assets/holiday4.jpg";
import holiday5 from "../assets/holiday5.jpg";
import holiday6 from "../assets/holiday6.jpg";
import holiday7 from "../assets/holiday7.jpg";
import holiday8 from "../assets/holiday8.jpg";
import holiday9 from "../assets/holiday9.jpg";
import { link } from "framer-motion/client";

const HolidayDestinations = () => {
  const destinations = [
    {
      title: "Our Latest Resort",
      desc: "Uncover our latest oasis, where luxury blends with serenity for the perfect getaway.",
      image: holiday1,
      link: "/latest-resort"
    },
    {
      title: "Famous Jungles in India",
      desc: "Embark on thrilling safaris in India’s lush jungles, home to diverse wildlife.",
      image: holiday2,
      link: "/india-jungles"
    },
    {
      title: "Famous Deserts in India",
      desc: "Experience India’s vast deserts with endless dunes and cultural adventures.",
      image: holiday3,
      link: "/india-deserts"
    },

    {
      title: "Famous Religious Places in India",
      desc: "Explore India’s sacred sites where ancient traditions and spiritual serenity unite.",
      image: holiday4,
      link: "/religious-india"
    },
    {
      title: "Famous Religious Places Outside India",
      desc: "Journey across borders to iconic spiritual landmarks that inspire peace worldwide.",
      image: holiday5,
      link: "/religious-outside"
    },
    {
      title: "Famous Hill Stations Outside India",
      desc: "Experience enchanting hill retreats across the globe offering relaxation and nature.",
      image: holiday6,
      link: "/hill-outside"
    },

    {
      title: "Famous Hill Stations in India",
      desc: "Unwind in stunning Indian hill stations with cool breezes and scenic views.",
      image: holiday7,
      link: "/hill-india"
    },
    {
      title: "Famous Beaches in India",
      desc: "Relax on India's beautiful beaches where sun, sand, and surf await.",
      image: holiday8,
      link: "/beaches-india"
    },
    {
      title: "Famous Beaches Outside India",
      desc: "Explore the world’s most beautiful beaches, perfect for adventure and relaxation.",
      image: holiday9,
      link: "/beaches-outside"
    },
  ];

  return (
  <section className="holiday-section">
    <h2 className="holiday-title">Holiday Destinations</h2>
    <div className="underline"></div>

    {/* 9 Cards Section */}
    <div className="holiday-grid">
      {destinations.map((item, index) => (
        <motion.div
          key={index}
          className="holiday-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <img src={item.image} alt={item.title} className="holiday-img" />
          <div className="holiday-content">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <Link to={item.link} className="read-more">Read More</Link>
          </div>
        </motion.div>
      ))}

    </div>

    {/* ---------------------- NEW SECTION START ---------------------- */}
    <div className="city-section">

  <div className="city-column">
    <h2 className="city-title">
      Famous <span className="highlight-blue">Metro Cities</span> In India
    </h2>

    <ul className="city-list">
      {[
        "Pune","Delhi","Noida","Kolkata",
        "Chennai","Mumbai","Bengaluru","Rajasthan"
      ].map((city, i) => (
        <motion.li
        key={i}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
        viewport={{ once: true }}
      >
        <FaMapMarkerAlt className="location-icon" /> {city}
      </motion.li>

      ))}
    </ul>
  </div>

  <div className="city-column">
    <h2 className="city-title">
      Famous <span className="highlight-blue">International</span> Destinations
    </h2>

        <ul className="international-list">
      {[
        "Bali","Dubai","Bangkok","Malesiya","Maldives","Singapore",
        "Bhutan","Mauritius","Istanbul","Croatia",
        "Italy","Spain","USA","France","Finland","Cambodia",
        "Egypt","Nepal","Srilanka","Vietnam"
      ].map((place, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          viewport={{ once: true }}
        >
          <FaMapMarkerAlt className="location-icon" /> {place}
        </motion.li>

      ))}
    </ul>

  </div>

</div>

    {/* ----------------- CUSTOMER REVIEWS SECTION ----------------- */}

        <div className="reviews-section">
        <h2 className="review-title">Our Members Reviews</h2>
        <div className="underline"></div>

        <Swiper
            spaceBetween={30}
            slidesPerView={3}                // ⭐ 3 slides side-by-side
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            modules={[Pagination, Autoplay]}
            className="review-slider"
            breakpoints={{                   // ⭐ RESPONSIVE SLIDER
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            }}
        >
            {[
            {
                text: "Dear Jagruthi holidays team, I am really satisfied with hotel Prabhupada at Puri. Location was near beach and walkable to Puri temple.",
                name: "Sagarika Sen",
                member: "BRK6N7D0089",
                image: user1,
            },
            {
                text: "We had a good experience with hassle free hotel booking in Munnar & Alleppy boat house. Rooms were clean and hygienic.",
                name: "Krishna Chaitanyaa",
                member: "FHHYD2N3D0065",
                image: user2,
            },
            {
                text: "Dear sir/mam, Mandarmani trip was good. Hotel was nice. Thanks Jagruthi Holidays Kolkata.",
                name: "Rajesh Kumar",
                member: "BRK2N3D0136",
                image: user3,
            },
            {
                text: "Wonderful service! Our Ooty trip was smooth and well arranged.",
                name: "Harini",
                member: "BRK3N4D0156",
                image: user4,
            },
            {
                text: "Amazing support from the team during our Goa holiday. Highly recommended.",
                name: "Mahesh Verma",
                member: "BRK4N5D0199",
                image: user5,
            },
            {
                text: "Great hotel selections and quick responses from Jagruthi team.",
                name: "Neha Sharma",
                member: "FHHYD3N2D0099",
                image: user6,
            },
            {
                text: "Kerala trip was memorable. Thank you Jagruthi Holidays!",
                name: "Aravindh",
                member: "BRK2N2D0111",
                image: user7,
            },
            {
                text: "Very professional and budget-friendly packages. Loved it!",
                name: "Sunitha",
                member: "BRK6N7D0104",
                image: user8,
            },
            ].map((review, i) => (
            <SwiperSlide key={i}>
                <div className="review-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="review-text">{review.text}</p>

                <div className="stars">
                    {[1, 2, 3, 4, ].map((s) => (
                    <FaStar key={s} className="star-icon" />
                    ))}
                </div>

                <div className="reviewer-img">
                    <img src={review.image} alt={review.name} />
                </div>

                <h3 className="review-name">{review.name}</h3>
                <p className="review-id">Membership No: {review.member}</p>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>

         {/* ---------------------- CONTACT US SECTION ---------------------- */}

<div className="contact-section" id="contact">
  <h2 className="contact-title">Contact us</h2>
  <div className="underline"></div>

  <div className="contact-container">

    <div className="contact-left">
      <h3 className="contact-heading">Have a Question or Suggestion?</h3>

      <p>
        Have questions or need more information? We’re here to help! Please fill
        out the form with your inquiry, and our team will get back to you as soon
        as possible.
      </p>

      <p>
        Whether you're seeking more details about our packages, services, or
        something else, we’re happy to assist.
      </p>

      <p>Feel free to call us or WhatsApp on given contact number or Mail us.</p>
    </div>

    <form className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label>Name *</label>
          <input type="text" placeholder="Enter name here" />
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input type="email" placeholder="Add email" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone Number *</label>
          <input type="text" placeholder="Enter your phone number" />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input type="text" placeholder="Enter your location here" />
        </div>
      </div>

      <div className="form-group full">
        <label>Comments / Questions *</label>
        <textarea rows="4" placeholder="Comments"></textarea>
      </div>

      <button className="send-btn">Send Message</button>
    </form>
  </div>
</div>

{/* ---------------------- CONTACT INFO CARDS ---------------------- */}

<div className="info-wrapper">
  <div className="info-container">

    {/* CALL */}
    <motion.div
      className="info-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="info-icon">
        <FaPhoneAlt size={32} />
      </div>
      <h3>Call Us</h3>
      <p>+91 9948762577</p>
    </motion.div>

    {/* MAIL */}
    <motion.div
      className="info-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="info-icon">
        <FaEnvelopeOpenText size={32} />
      </div>
      <h3>Mail Us</h3>
      <p className="mail">jagruthipropertydevelopers1@gmail.com</p>
    </motion.div>

    {/* LOCATION */}
    <motion.div
      className="info-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="info-icon">
        <FaMapMarkerAlt size={32} />
      </div>
      <h3>Visit Us</h3>
      <p className="address">
       Flat No-501, Fifth floor, Waltair Heights, Balaji Nagar, Visakhapatnam
      </p>
      <p>-----------------------</p>
      <p>
        D.no 6-3-23, Dantuvari street, SuryaraoPeta, near Nookalamma Temple, Kakinada
      </p>
    </motion.div>

  </div>
</div>





    {/* ---------------------- NEW SECTION END ---------------------- */}

  </section>
);
};

export default HolidayDestinations;
