import Layout from "./componets/Layout/Layout";
import SignInModal from "./componets/Modals/AuthModals/SignInModal/SignInModal";
import ProductDeatailsModal from "./componets/Modals/ProduсtsModals/ProductDetailsModal";
import { useModalStore } from "./stores/modalStore";

function App() {
  const { openModal, setOpenModal, closeModal } = useModalStore();

  return (
    <>
      {openModal === "signIn" && <SignInModal openModal={openModal} closeModal={closeModal} />}
      {openModal === "ProductDitails" && <ProductDeatailsModal openModal={openModal} closeModal={closeModal} />}
      <Layout setOpenModal={setOpenModal} />
    </>
  );
};

export default App;
