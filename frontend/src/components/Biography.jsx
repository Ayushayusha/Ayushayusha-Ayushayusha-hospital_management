import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          S&SMK Multispecialty Hospital, established in 2014, is a premier
           healthcare institution located in Ballia, Uttar Pradesh. Renowned for
            its state-of-the-art facilities and comprehensive medical services, the hospital caters
             to diverse specialties, ensuring holistic and patient-centric care. With a dedicated team
              of experienced doctors, skilled nurses, and modern technology, S&SMK has become a trusted name
               in delivering advanced treatments and compassionate support. Our mission is to provide accessible,
               high-quality healthcare while prioritizing the comfort and recovery of every patient. Serving the community
           with unwavering commitment, S&SMK continues to set new benchmarks in medical excellence and compassionate healing
          </p>
          <p>We are all in 2024!</p>
          <p>We are are also a provides 24*7 facility</p>
          <p>
          S&SMK Multispecialty Hospital, established in 2014, stands as a beacon of hope and healing in Ballia, Uttar Pradesh. With cutting-edge technology, advanced diagnostic tools, and specialized departments, the hospital offers a wide range of treatments tailored to individual needs. From emergency care to wellness programs, we are dedicated to improving lives through excellence in healthcare, compassion, and an unwavering focus on patient well-being
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
