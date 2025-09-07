import Box from "@mui/material/Box";
import NavButton from "./NavButton";
import { useEffect } from "react";
import { useCategories, useGetCategories, useSelectedCategory, useSetSelectedCategory } from "../../stores/categoryStore";

const Nav = () => {
  const categories = useCategories();
  const getCategories = useGetCategories()
  const selectedCategory = useSelectedCategory();
  const setSelectedCategory = useSetSelectedCategory();

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
        return (
          <NavButton
            key={category.id}
            category={category}
            selectedCategory={selectedCategory}
            setSeletedCategory={setSelectedCategory}
          />
        );
      })}
    </Box>
  );
};

export default Nav;
