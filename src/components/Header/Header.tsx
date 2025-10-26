import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import headerLogo from "../../assets/icons/header_logo.svg";
import headerBurger from "../../assets/icons/header_burger.svg";
import type { ModalType } from "../../stores/modalStore";

interface HeaderProps {
  setOpenModal: (modal: ModalType) => void;
};

const Header = ({ setOpenModal }: HeaderProps) => {
  const headerBg = `url("data:image/svg+xml,%3csvg%20width='1440'%20height='466'%20viewBox='0%200%201440%20466'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='720'%20cy='-974'%20r='1440'%20fill='%23FFAB08'/%3e%3c/svg%3e")`;

  return (
    <AppBar
      sx={{
        position: "static",
        backgroundImage: headerBg,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundColor: "transparent",
        boxShadow: "none",
        height: 497,
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1290, margin: "0 auto", }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: "24px"
          }}
        >
          <Box
            component="a"
            href="/"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Box component="img" src={headerLogo} alt="Logo" />
          </Box>
          <Box sx={{ ml: "auto", display: "flex", gap: "10px" }}>
            <Button
              onClick={() => setOpenModal("signIn")}
              disableRipple
              sx={{
                backgroundColor: "#FFAB08",
                color: "#fff",
                border: "1px solid #fff",
                borderRadius: "5px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
                padding: "8px 12px",
              }}
            >
              Sign In
            </Button>
            <Button
            onClick={() => setOpenModal("signUp")}
              disableRipple
              sx={{
                backgroundColor: "#fff",
                color: "#FFAB08",
                border: "1px solid #fff",
                borderRadius: "5px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
                padding: "8px 12px",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
        <Box
          sx={{
            display: "flex",
            gap: "21px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Box component="img" src={headerBurger} />
          </Box>
          <Box>
            <Typography component="h1"
              sx={{
                fontWeight: 800,
                fontSize: "50px",
                lineHeight: "120%",
                letterSpacing: 0,
                mb: "52px"
              }}
            >
              Только самые
              <Typography component="span"
                sx={{
                  display: "block",
                  fontWeight: 800,
                  fontSize: "50px",
                  lineHeight: "120%",
                  color: "#FF5C00"
                }}
              >
                сочные бургеры!
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
              }}
            >
              Бесплатная доставка от
              <Typography
                component="span"
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                {" 599 сом"}
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
