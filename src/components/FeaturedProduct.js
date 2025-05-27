import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Dialog } from "@mui/material";
import { motion } from "framer-motion";
import ProductDetail from "../pages/Product_detail"; // Import the modal component

import YadaeT9 from "../assets/FuturedImages/Yadea-T9.png";
import YadaeM6 from "../assets/FuturedImages/YadeaM6.png";
import Aima_A700 from "../assets/FuturedImages/Aima_A700.png";
import Aima_A723 from "../assets/FuturedImages/Aima_A723.png";
import Aima_F626 from "../assets/FuturedImages/Aima_F626.png";

const products = [
  { id: 1, name: "Yadae T9", description: "Powered by Yadea", image: YadaeT9, type: "scooter", available_stock: 8, IsAwarder: true, colors: { red: YadaeT9, yellow: YadaeT9 } },
  { id: 2, name: "Yadea M6", description: "Powered by Yadea", image: YadaeM6, type: "electric", available_stock: 12, IsAwarder: true, colors: { red: YadaeM6, yellow: YadaeM6 } },
  { id: 3, name: "Aima A700", description: "Powered by Aima", image: Aima_A700, type: "scooter", available_stock: 10, IsAwarder: false, colors: { red: Aima_A700, yellow: Aima_A700 } },
  { id: 4, name: "Aima A723", description: "Powered by Aima", image: Aima_A723, type: "electric", available_stock: 5, IsAwarder: false, colors: { red: Aima_A723, yellow: Aima_A723 } },
  { id: 5, name: "Aima F626", description: "Powered by Aima", image: Aima_F626, type: "scooter", available_stock: 8, IsAwarder: false, colors: { red: Aima_F626, yellow: Aima_F626 } },
];

const ProductList = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      {/* Product List */}
      <Box
        component={motion.div}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          p: 2,
          "&::-webkit-scrollbar": { height: "6px" },
          "&::-webkit-scrollbar-thumb": { backgroundColor: "#8b8b8b", borderRadius: "6px" },
          "&::-webkit-scrollbar-track": { backgroundColor: "#f1f1f1" },
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card sx={{ width: 250, flexShrink: 0, cursor: "pointer" }} onClick={() => handleOpen(product)}>
              <CardMedia component="img" height="140" image={product.image} alt={product.name} />
              <CardContent>
                <Typography className="hero-text product_name">{product.name}</Typography>
                <Typography className="hero-text product_detail">{product.description}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>

      {/* Product Detail Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        {selectedProduct && <ProductDetail product={selectedProduct} onClose={handleClose} />}
      </Dialog>
    </>
  );
};

export default ProductList;
