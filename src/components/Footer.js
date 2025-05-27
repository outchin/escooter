import React from 'react';
import { Box, Typography, Grid, Link, TextField, Button } from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import  Facebook  from '../assets/social_media_image/facebook.png';
import  Instagram  from '../assets/social_media_image/instagram.png';
import  WhatsApp from '../assets/social_media_image/whats_up.png';
import TikTok from '../assets/social_media_image/tik_tok.png';

const Footer = () => {
  return (
    <Box sx={{  color: '#fff', padding: 4, fontSize: '14px',background: 'linear-gradient(-190deg, #8b8b8b 50%, #8b8b8b 50%)',
      clipPath: 'polygon(0 0, 100% 5px, 100% 100%, 0 100%)',
      zIndex: -1,
}}>
      {/* Top Section - Contact Info */}
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOn sx={{ color: '#F57921', mr: 1 }} />
          <Box>
            <Typography className='hero-text paragraph'>Find Us</Typography>
            <Typography className='hero-text sub_paragraph'>1010 Avenue, SW 54321, Chandigarh</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <Phone sx={{ color: '#000000', mr: 1 }} />
          <Box>
            <Typography className='hero-text paragraph'>Call Us</Typography>
            <Typography className='hero-text sub_paragraph'>+959 876543210</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <Email sx={{ color: '#000000', mr: 1 }} />
          <Box>
            <Typography className='hero-text paragraph'>Mail Us</Typography>
            <Typography className='hero-text sub_paragraph'>matm-ecooter@gmail.com</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Box sx={{ borderBottom: '1px solid #ffffff', my: 3 }}></Box>

      {/* Main Footer Content */}
      <Grid container spacing={3} justifyContent="space-between">
        {/* Company Info */}
        <Grid item xs={12} sm={4}>
          {/* <Typography className='hero-text popular'>Company</Typography>
          <Typography className='hero-text review-name'           >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </Typography> */}
          <Box sx={{ mt: 2 }}>
            <Typography className='hero-text paragraph' sx={{ mb:2 }}>Follow Us</Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 ,ml :2  }}>
            <Link href="#" sx={{ textDecoration: 'none' }}>
  <img className='hero-image-footer' src={Facebook} alt="Facebook" width="24" height="24" />
</Link>
<Link  href="#" sx={{ textDecoration: 'none' }}>
  <img className='hero-image-footer' src={WhatsApp} alt="Twitter" width="24" height="24" />
</Link>
<Link href="#" sx={{ textDecoration: 'none' }}>
  <img className='hero-image-footer' src={TikTok} alt="Instagram" width="24" height="24" />
</Link>
<Link href="#" sx={{ textDecoration: 'none' }}>
  <img className='hero-image-footer' src={Instagram} alt="Instagram" width="24" height="24" />
</Link>

            </Box>
          </Box>
        </Grid>

       
        {/* Subscribe Section */}
        <Grid item xs={24 } sm={8}>
          <Typography className='hero-text paragraph'>Subscribe</Typography>
          <Typography className='hero-text sub_paragraph' sx={{ mt: 1 , mb: 2 }}>
            Please , Don't miss to subscribe to our new social media channels for updates. 
          </Typography>
          <Box sx={{
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap', // Ensures links wrap instead of overflowing
    justifyContent: { xs: 'center', md: 'flex-start' }, // Center on mobile, right-align on desktop
  }} className="hero-text sub_paragraph">
          <Link href="#" color="inherit">Home</Link>
          <Link href="#" color="inherit">Terms</Link>
          <Link href="#" color="inherit">Privacy</Link>
          <Link href="#" color="inherit">Policy</Link>
          <Link href="#" color="inherit">Contact</Link>
        </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, borderTop: '1px solid #ddd', pt: 2 }}>
        <Typography className='hero-text sub_paragraph'>© 2023 E-Scooter. All rights reserved.</Typography>
        <Box sx={{
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap', // Ensures links wrap instead of overflowing
    justifyContent: { xs: 'center', md: 'flex-end' }, // Center on mobile, right-align on desktop
  }} className="hero-text review-name">
          
        <Typography className='hero-text sub_paragraph'>Developed by Tio Tech </Typography>
      
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;