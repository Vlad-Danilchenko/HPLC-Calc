import { Link } from "react-router-dom";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { NavBox } from "./Header.styled.js";

export const Header = () => {
  return (
    <header>
      <Container>
        <NavBox>
          <Link to="/">HPLC</Link>
          <BurgerMenu />
        </NavBox>
      </Container>
    </header>
  );
};
