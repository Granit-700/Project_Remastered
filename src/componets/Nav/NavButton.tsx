import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { Category } from "../../types/mainPage/mainPage";

interface NavButtonProps {
  category: Category;
  selectedCategory: Category | null;
  setSeletedCategory: (value: Category) => void;
}

const NavButton = ({ category, selectedCategory, setSeletedCategory }: NavButtonProps) => {  
  return (
    <Button
      onClick={() => {
        setSeletedCategory(category);
      }}
      disableRipple
      className={ selectedCategory?.id === category.id ? "selected" : ""}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "50px",
        padding: "8px 14px",
        display: "flex",
        gap: "8px",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "none",
        border: "1px solid #fff",
        color: "#000",
        "&:hover": {
          transition: "0.2s",
          border: "1px solid #F86310"
        },
        "&.selected": {
          transition: "0",
          backgroundColor: "#FFAB08",
          border: "1px solid #FFAB08",
        },
      }}
    >
      <Box
        component="img"
        src={category.image}
        alt={category.name}
        sx={{ maxWidth: "24px", maxHeight: "24px" }}
      />
      <Typography sx={{ fontSize: "16px" }}>
        {category.name}
      </Typography>
    </Button>
  );
};

export default NavButton;
