import { useState } from "react";
import Modal from "../Modal/Modal"
import burgerMenuImg from '../../assets/img/burgerMenuImg.svg'

import { Img } from "./BurgerMenu.styled";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClic = (e) => {
        const isClick = e.target;
        if (isClick === e.currentTarget) {
            setIsOpen(!isOpen)
        }
    }
    return (
        <div>
       
            {/* <button type="button" onClick={handleClic}> */}
            <Img onClick={handleClic} src={burgerMenuImg} />
            {/* </button> */}
            {isOpen && <Modal isOpen={handleClic} />}
        </div>
    )
}

export default BurgerMenu;