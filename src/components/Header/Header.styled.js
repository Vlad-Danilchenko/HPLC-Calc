import styled from "styled-components";

export const Container = styled.div`
  max-width: 480px;
  padding: 24px 16px 0;
  background: linear-gradient(180deg, #190122 0%, #300241 51.84%, #110415 100%);
`;
export const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dbd4d4;
  border-radius: 10px;
  padding: 5px 16px;
`;

export const Logo = styled.a`
  color: #3f784c;
  font-family: "Varela Round", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4;
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
  /* color: #fff;
  fill: currentColor; */
`;
