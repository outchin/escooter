import React from "react";
import { FaBullseye, FaEye, FaBalanceScale } from "react-icons/fa";
import "../styles/company_statement.css"; // Import CSS

const CompanyStatement = () => {
  return (
    <div className="company-statement-container">
      <h2 className="hero-text product_name" style={{marginLeft:'20'}}>COMPANY STATEMENTS</h2>
      <p className="hero-text review-name">
        Our mission, vision, and values define who we are and guide our journey.
      </p>

      <div className="statement-grid">
        {/* Mission */}
        <div className="statement-card mission">
          <div className="icon-circle">
            <FaBullseye className="icon" />
          </div>
          <h3 className="statement-title">OUR MISSION</h3>
          <p className="hero-text review-name">
            We aim to deliver the best products with innovative technology.
          </p>
        </div>

        {/* Vision */}
        <div className="statement-card vision">
          <div className="icon-circle">
            <FaEye className="icon" />
          </div>
          <h3 className="statement-title">OUR VISION</h3>
          <p className="statement-text">
            To be a global leader in our industry with innovation and excellence.
          </p>
        </div>

        {/* Values */}
        <div className="statement-card values">
          <div className="icon-circle">
            <FaBalanceScale className="icon" />
          </div>
          <h3 className="statement-title">OUR VALUES</h3>
          <p className="statement-text">
            Integrity, innovation, and customer satisfaction are our core values.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyStatement;
