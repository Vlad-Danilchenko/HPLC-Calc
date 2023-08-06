import { Container, Img, NavBox } from "./Header.styled.js";
import logo from "../../assets/img/burger-menu.svg";

export const Header = () => {
  return (
    <header>
      <Container>
        <NavBox>
          <a>HPLC</a>
          <Img src={logo} />
        </NavBox>
      </Container>
    </header>
  );
};
