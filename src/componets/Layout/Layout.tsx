import { Box, Container } from "@mui/material";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

const Layout = () => {
  return (
    <>
      <Header />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          maxWidth: 1290,
          margin: "0 auto"
        }}
      >
        <Nav />
        <Box sx={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
          <SideBar />
          <Main />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
