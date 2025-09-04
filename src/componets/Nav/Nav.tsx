import Box from "@mui/material/Box";
import NavButton from "./NavButton";
import { useEffect } from "react";
import { useCategories, useGetCategories } from "../../stores/categoryStore";

const Nav = () => {
  const getCategories = useGetCategories()
  const categories = useCategories();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
        margin: "40px 0 50px 0",
        gap: "24px",
      }}
    >
      {categories.map((category) => {
        return <NavButton key={category.id} category={category} />
      })}
    </Box>
  );
};

export default Nav;
