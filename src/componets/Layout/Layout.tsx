import { Container } from "@mui/material";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth={false} sx={{ maxWidth: 1290, margin: "0 auto", }}>
        <Nav />
        <SideBar />
        <Main />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
