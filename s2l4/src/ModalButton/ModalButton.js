import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

class ModalButton extends Component {
    
    static displayName = 'ModalButton';
    
    state = {
        isModalShow: false
    };

    hideModal = () => {
        this.setState({isModalShow: false});
    }

    showModal = () => {
        this.setState({isModalShow: true});
    }

    render() {
        const { isModalShow } = this.state;
        const modal = isModalShow ? (
            <Modal domNode={document.querySelector("#portal")}>
                <div className="modal">
                    <div className="modal-inner">
                        <p>It is a modal window</p>
                        <button onClick={this.hideModal}>Close Modal</button>
                    </div>
                </div>
            </Modal>
        ) : null;

        return (
            <div>
                <button onClick={this.showModal}>Show modal!</button>
                {modal}
            </div>
        );
    }
}

export default ModalButton;
