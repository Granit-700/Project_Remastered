import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useGetProducts, useProducts } from "../../stores/productStore";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useSelectedCategory } from "../../stores/categoryStore";

const Main = () => {
  const getProducts = useGetProducts();
  const products = useProducts();
  const selectedCategory = useSelectedCategory();
  const filteredProducts = products.filter((product) => {
    return product.category.id === selectedCategory?.id;
  });

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box component="main">
      <Box component="section">
        <Typography
          component="h2"
          sx={{
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "120%",
            mb: "24px"
          }}
        >
          {selectedCategory?.name}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          {filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
