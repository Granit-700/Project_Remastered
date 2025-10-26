import Layout from "./components/Layout/Layout";
import SignInModal from "./components/Modals/AuthModals/SignInModal/SignInModal";
import SignUpModal from "./components/Modals/AuthModals/SignUpModal/SignUpModal";
import ProductDetailsModal from "./components/Modals/ProduсtsModals/ProductDetailsModal";
import { useModalStore } from "./stores/modalStore";

function App() {
  const { openModal, setOpenModal, closeModal } = useModalStore();

  return (
    <>
      {openModal === "signIn" && <SignInModal openModal={openModal} closeModal={closeModal} />}
      {openModal === "signUp" && <SignUpModal openModal={openModal} closeModal={closeModal} />}
      {openModal === "ProductDitails" && <ProductDetailsModal openModal={openModal} closeModal={closeModal} />}
      <Layout setOpenModal={setOpenModal} />
    </>
  );
};

export default App;
