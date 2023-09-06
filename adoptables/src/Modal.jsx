import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    const elRef = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement('div');
    } // end of if statement that creates a div if there is no current div

    useEffect(() => {
        const modalRoot = document.getElementById('modal');
        modalRoot.appendChild(elRef.current);

        return () => modalRoot.removeChild(elRef.current);
    }, []); // end of useEffect hook that appends the elRef.current div to the modal root element

    return createPortal(<div>{children}</div>, elRef.current);
}; // end of Modal component function that takes in children and returns a createPortal component with a div and the children and the elRef.current div

export default Modal; // exports the Modal component function