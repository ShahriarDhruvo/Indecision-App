import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Your Selected Choice"
    closeTimeoutMS={200}
    className="modal"
    onRequestClose={props.handleClearModal}
    ariaHideApp={false}
  >
    <h3 className="modal__title"> Your Selected Choice </h3>
    {props.selectedOption && (
      <p className="modal-body">{props.selectedOption}</p>
    )}
    <button className = "button" onClick={props.handleClearModal}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
