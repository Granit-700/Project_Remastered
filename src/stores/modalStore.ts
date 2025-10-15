import { create } from "zustand";

export type ModalType = "signIn" | "signUp" | "ProductDitails" | null;

interface State {
  openModal: ModalType;
  setOpenModal: (modal: ModalType) => void;
  closeModal: () => void;
};

export const useModalStore = create<State>((set) => {
  return {
    openModal: null,
    setOpenModal: (modal: ModalType) => set({ openModal: modal }),
    closeModal: () => set({ openModal: null }),
  };
});
