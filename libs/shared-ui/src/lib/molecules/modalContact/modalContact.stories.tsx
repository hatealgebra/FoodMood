import React from "react";
import ModalContact from "./ModalContact";

export const Contact = () => (
  <ModalContact isOpen={true} onOpen={() => true} onClose={() => false} />
);

export default {
  component: ModalContact,
  title: "Molecules/Modal contact",
  argTypes: {
    onOpen: { action: "clicked" },
    onClose: { action: "Modal was close" },
  },
};
