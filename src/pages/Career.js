import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import "../styles/career.css"; // Import the CSS file
import Header from "../components/Header";
import CareerImage from "../assets/images/join_our_team.png";
import Footer from '../components/Footer';

const Career = () => {
  return (
    <div>
                    <Header />

                    <div className="career-container">
      {/* Left Section - Text Content */}
      <div className="career-image">
        <img src={CareerImage} alt="Career Opportunity" />
      </div>
      
      {/* Right Section - Image */}
      <div className="career-text">
        <h2>Looking for a Job? Join Our Team!</h2>
        <p>We are seeking dedicated applicants who:</p>
        <ul>
          <li>✅ Are committed to long-term employment</li>
          <li>✅ Are willing to travel</li>
          <li>✅ Are interested in career growth opportunities</li>
        </ul>
        <p>If you meet all the above criteria, we encourage you to send us your resume!</p>
        <h3>Please include the following documents along with your application:</h3>
        <ul>
          <li>📌 Three recent passport-sized photos</li>
          <li>📌 A copy of your NRC (National Registration Card)</li>
          <li>📌 Family registration document</li>
          <li>📌 Labor card</li>
          <li>📌 Education certificates</li>
          <li>📌 Any other relevant documents</li>
        </ul>
      </div>

    </div>
    <Footer />

    </div>
    
  );
};

export default Career;
