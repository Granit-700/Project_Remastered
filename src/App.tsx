import { useState } from "react";
import Layout from "./componets/Layout/Layout";
import SignInModal from "./componets/Modals/AuthModals/SignInModal/SignInModal";

function App() {
  const [isOpenModal, setIsOpenModal] = useState<"signIn" | null>(null);

  return (
    <>
      {isOpenModal === "signIn" ?
        <SignInModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        /> : null}
      <Layout setIsOpenModal={setIsOpenModal} />
    </>
  );
};

export default App;
