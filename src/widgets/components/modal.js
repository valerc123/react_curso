import React from "react";
import './modal.css';
// modal
function Modal(props){
    return(
        <div className="Modal">
        {/*this is a modal */}
            {props.children}
            <button onClick={props.handleClick}>Cerrar</button> 
        </div> 
    )
}
export default Modal;