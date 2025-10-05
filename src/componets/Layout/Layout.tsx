import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import type { ModalType } from "../../stores/modalStore";

interface LayoutProps {
  setOpenModal: (modal: ModalType) => void;
};

const Layout = ({setOpenModal}: LayoutProps) => {
  return (
    <>
      <Header setOpenModal={setOpenModal} />
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
