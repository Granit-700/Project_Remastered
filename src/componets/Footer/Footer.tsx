import { Box, Typography } from "@mui/material";
import footerLogo from "../../assets/icons/footer_logo.svg";
import vk from "../../assets/icons/vk_social.svg";
import tg from "../../assets/icons/tg_social.svg";
import phone from "../../assets/icons/phone.svg";

const Footer = () => {
  return (
    <Box component="footer"
      sx={{
        padding: "51px 0 40px 0",
        display: "flex",
        flexDirection: "column",
        gap: "34px"
      }}
    >

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>

        <Box>
          <Box component="a" href="/">
            <Box component="img" src={footerLogo} alt="Logo" />
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "126px" }}>
          <Box>
            <Typography sx={{ mb: "24px", fontSize: "24px", }}>
              Номер для заказа
            </Typography>
            <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <Box component="img" src={phone} alt="phone" />
              <Typography component="span"
                sx={{
                  fontSize: "16px",
                  lineHeight: "130%",
                }}
              >
                +7(930)833-38-11
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                mb: "22px",
                fontSize: "24px",
              }}
            >
              Мы в соцсетях
            </Typography>
            <Box sx={{ display: "flex", gap: "16px", }}>
              <Box component="a" href="https://vk.com" >
                <Box component="img" src={vk} alt="vk" />
              </Box>
              <Box component="a" href="https://t.me">
                <Box component="img" src={tg} alt="tg" />
              </Box>
            </Box>
          </Box>
        </Box>

      </Box>

      <Box gap="4px" sx={{ display: "flex", flexDirection: "column" }}>
        <Typography component="span" sx={{ fontSize: "12px" }}>
          © YouMeal, 2022
        </Typography>
        <Typography component="span" sx={{ fontSize: "12px" }}>
          Design: Anastasia Ilina
        </Typography>
      </Box>

    </Box>
  );
};

export default Footer;
