import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useGetProducts, useProducts } from "../../stores/productStore";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

const Main = () => {
  const getProducts = useGetProducts();
  const products = useProducts();

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
          Синхронизировать
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
