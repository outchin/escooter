import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "../styles/company_background.css";
import Changang from "../assets/images/changang.png";
import Bestune from "../assets/images/bestune.png";
import Rhinotek from "../assets/images/rhinotek.png";
import Yadea from "../assets/images/yadea.png";
import Aima from "../assets/images/aima.jpg";

const logos = [
  { name: "Changan Auto", src: Changang },
  { name: "Bestune", src: Bestune },
  { name: "Rhinotek", src: Rhinotek },
  // { name: "Yadea", src: Yadea },
  // { name: "Aima", src: Aima },
];

const stats = [
  { value: "500+", label: "Employees" },
  { value: "Since 2019", label: "" },
  { value: "7", label: "4S Showrooms" },
  { value: "2", label: "Factories" },
];

const CompanyBackground = () => {
  return (
    <Container className="company-background">
      {/* Description & Logo Grid in One Row */}
      <Box className="about-container">
        {/* Company Description */}
        
        <Typography className="company-description">
          <Typography className="hero-text sub_title">
                    The Story behind MATM E-Scooter 
                  </Typography><br></br>
         <Typography className="hero-text paragraph"> Founded in <strong>2019</strong> and headquartered in <strong>Mandalay, Myanmar</strong>. 
          The company specializes in dealership importing, marketing, and distribution of ICE & EV 
          cars and E-scooters. With <strong>7 showrooms</strong> across Yangon and Mandalay and 
          <strong> 2 factories</strong>, we are committed to sustainable mobility.</Typography>
        </Typography>

        {/* Hexagonal Logo Grid */}
        <Box className="hex-grid">
          {logos.map((logo, index) => (
            <Box key={index} className="hex">
              <img src={logo.src} alt={logo.name} className="hex-logo" />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Key Stats (Below) */}
      {/* <Box className="stats-container">
        {stats.map((stat, index) => (
          <Box key={index} className="stat-item">
            <Typography className="stat-value">{stat.value}</Typography>
            <Typography className="stat-label">{stat.label}</Typography>
          </Box>
        ))}
      </Box> */}
    </Container>
  );
};

export default CompanyBackground;
