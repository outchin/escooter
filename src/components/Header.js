import React, { useState } from "react";
import { 
  AppBar, Toolbar, Typography, Button, IconButton, Drawer, 
  List, ListItem, ListItemText, MenuItem, Select, Box
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; // Import useLocation
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "../assets/images/logo_png.png";
import "../styles/header.css"; // Import separate CSS

// Import flag images
import USFlag from "../assets/images/myanmar.png";
import MMFlag from "../assets/images/us.png";
import CNFlag from "../assets/images/chinese.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const isMobile = useMediaQuery("(max-width: 900px)");
  const location = useLocation(); // Get the current route

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Products", link: "/products" },
    { text: "Career", link: "/career" },
    { text: "Blogs & News", link: "/blog-and-news" },
    { text: "Contact Us", link: "/contact-us" },
  ];

  const languages = [
    { code: "en", label: "English", flag: USFlag },
    { code: "my", label: "Myanmar", flag: MMFlag },
    { code: "zh", label: "Chinese", flag: CNFlag },
  ];

  return (
    <AppBar position="sticky" className="header-appbar" sx={{ background: "linear-gradient(45deg, #ffffff 50%, #8b8b8b 50%)" }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <IconButton edge="start" component={Link} to="/">
          <img src={Logo} alt="Logo" className="header-logo" />
        </IconButton>

        {/* Desktop Menu */}
        {!isMobile && (
          <>
            <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
            {menuItems.map((item) => (
              <Button 
                key={item.text} 
                component={Link} 
                to={item.link} 
                className={`header-nav-button ${location.pathname === item.link ? "active-tab" : ""}`} 
              >
                {item.text}
              </Button>
            ))}

            {/* Language Selector */}
            <Select value={language} onChange={handleLanguageChange} className="header-language-selector">
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code} className="header-language-option">
                  <img src={lang.flag} alt={lang.label} className="header-language-flag" />
                  {lang.label}
                </MenuItem>
              ))}
            </Select>
          </>
        )}

        {/* Mobile Menu Icon (Drawer Open Icon) */}
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} className="header-menu-icon">
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer (Sidebar) */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} className="header-drawer">
        <Box className="header-drawer-container">
          {/* Logo at the top in mobile view */}
          <Box className="header-drawer-logo">
            <img src={Logo} alt="Logo" />
          </Box>

          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.link} onClick={handleDrawerToggle}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}

            {/* Language Selector in Mobile Drawer */}
            <ListItem>
              <Select value={language} onChange={handleLanguageChange} fullWidth className="header-language-selector">
                {languages.map((lang) => (
                  <MenuItem key={lang.code} value={lang.code} className="header-language-option">
                    <img src={lang.flag} alt={lang.label} className="header-language-flag" />
                    {lang.label}
                  </MenuItem>
                ))}
              </Select>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
