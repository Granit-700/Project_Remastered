import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import headerBg from "../../assets/images/background_header.png";
import headerLogo from "../../assets/icons/header_logo.svg";
import headerBurger from "../../assets/icons/header_burger.svg";

const Header = () => {
  return (
    <AppBar
      sx={{
        position: "static",
        backgroundImage: `url(${headerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundColor: "transparent",
        boxShadow: "none",
        height: 497,
        width: "100%"
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
              disableRipple
              sx={{
                backgroundColor: "№FFAB08",
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
              Sing In
            </Button>
            <Button
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
              Sing Up
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
                fontFamily: "Nunito",
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
                599 сом
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
