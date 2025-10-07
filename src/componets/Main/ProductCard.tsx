import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import type { Product } from "../../types/mainPage/mainPage";
import type { ModalType } from "../../stores/modalStore";

interface ProductCardProps {
  product: Product;
  setOpenModal: (modal: ModalType) => void;
};

const ProductCard = ({ product, setOpenModal }: ProductCardProps) => {
  return (
    <Card sx={{ p: "12px", borderRadius: "18px" }}>
      <CardActionArea
        disableRipple
        onClick={() => setOpenModal("ProductDitails")}
      >
        <CardMedia
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: "276px",
            height: "220px",
            mb: "16px",
            borderRadius: "12px",
          }}
        />
        <CardContent sx={{ p: 0, mb: "8px" }}>
          <Typography
            component="p"
            sx={{ fontWeight: 600, fontSize: "24px", mb: "8px" }}
          >
            {product.original_price + " сом"}
          </Typography>
          <Typography
            component="h3"
            sx={{ fontSize: "16px", lineHeight: "130%", mb: "29px" }}
          >
            {product.name}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "130%",
              color: "#B1B1B1"
            }}
          >
            {product.grams + " г"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 0 }}>
        <Button
          disableRipple
          sx={{
            width: "100%",
            borderRadius: "12px",
            backgroundColor: "#F2F2F3",
            textTransform: "none",
            fontSize: "16px",
            color: "#000",
            "&:hover": {
              backgroundColor: "#FFAB08",
              color: "#fff",
            },
            "&:active": {
              backgroundColor: "#F86310",
              color: "#fff",
            },
            mt: "8px",
          }}
        >
          Добавить
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
