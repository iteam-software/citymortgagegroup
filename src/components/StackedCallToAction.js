import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import Modal from "react-modal";
import { Lead } from "../css/shared";

// Modal Config
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-30%",
    transform: "translate(-50%, -50%)",
  },
};

const StackedCallToAction = ({ cta1, cta2 }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // for screenreader accessibility
    // link: https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme
    Modal.setAppElement("#___gatsby");
  }, []);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="bg-primary my-10 w-64"
        css={css`
          padding: 10px 40px;
          font-weight: 700;
        `}
      >
        {cta1}
      </button>
      <div className="border w-1/4 my-5" />
      <button
        onClick={openModal}
        className="bg-primary my-10 lg:w-72 whitespace-no-wrap"
        css={css`
          padding: 10px 20px;
          font-weight: 700;
        `}
      >
        {cta2}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Refinance Paperwork Modal"
      >
        <Lead className="font-bold">Paperwork needed to Refinance:</Lead>
        <Lead>
        <ul className="px-10" css={css`
        list-style-type: disc;
        `}>
          <li>Paystubs</li>
          <li>Tax Returns, W-2s, and/or 1099s</li>
          <li>Credit Report</li>
          <li>Statement of Debts</li>
          <li>Statement of Assets</li>
        </ul>
        </Lead>
      </Modal>
    </div>
  );
};

export default StackedCallToAction;
