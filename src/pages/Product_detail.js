import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProductDetail = ({ product, onClose }) => {
  const [selectedColor, setSelectedColor] = useState("red");

  return (
    <Box sx={{ p: 4, width: "60vw", maxWidth: "600px", textAlign: "center", position: "relative" }}>
      {/* Close Button */}
      <IconButton sx={{ position: "absolute", top: 8, right: 8 }} onClick={onClose}>
        <CloseIcon />
      </IconButton>

      {/* Product Name */}
      <Typography variant="h4">{product.name}</Typography>

      {/* Product Image */}
      <img
        src={product.colors[selectedColor]}
        alt={product.name}
        style={{ width: "80%", height: "auto", margin: "20px 0" }}
      />

      {/* Product Details */}
      <Typography variant="h6">{product.description}</Typography>
      <Typography variant="body1">Type: {product.type}</Typography>
      <Typography variant="body1">Stock: {product.available_stock}</Typography>

      {/* Color Chart */}
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 2 }}>
        {Object.keys(product.colors).map((color) => (
          <Button
            key={color}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: color,
              border: selectedColor === color ? "3px solid black" : "none",
            }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductDetail;
