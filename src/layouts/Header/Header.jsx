import BurgerMenu from "../../components/BurgerMenu/BurgerMenu.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { NavBox } from "./Header.styled.js";

export const Header = () => {
  return (
    <header>
      <Container>
        <NavBox>
          <a>HPLC</a>
          <BurgerMenu />
        </NavBox>
      </Container>
    </header>
  );
};
