import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import "../styles/about_us.css"; // Import the CSS file
import Header from "../components/Header";
import CompanyBackground from "../components/company_background";
import CompanyStatement from "../components/company_statement";
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
                    <Header />

    <Container maxWidth="lg" className="about-container">

      {/* Section 1: Company Background */}
        <CompanyBackground />
       
      {/* Section 2: Mission & Vision */}
      <CompanyStatement />

      

      {/* Section 4: Investor & Partnership */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" className="about-title">
          Investor & Partnership
        </Typography>
        <Card className="about-card">
          <CardContent>
            <Typography className="about-card-content">
              We welcome partnerships with investors and organizations aligned with our vision for a greener future.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
    <Footer />

    </div>
    
  );
};

export default AboutUs;
