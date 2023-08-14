import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, BodyModal } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root');


const Modal = ({isOpen}) => {
  
    return  createPortal(<>
       
                <Backdrop>
                    <BodyModal>
                        <button type='button' onClick={isOpen}><span>X</span></button>
                    </BodyModal>
                </Backdrop>
            </>, modalRoot)
}

export default Modal;