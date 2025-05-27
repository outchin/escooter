import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './my_theme'; // Import your custom MUI theme
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import BlogsAndNews from './pages/Blogs_and_News';
import ContactUs from './pages/ContactUs';
import Product from './pages/Products';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog-and-news" element={<BlogsAndNews />} />
          <Route path="/contact-us" element ={<ContactUs/>}/>
          <Route path="/products" element={<Product/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
