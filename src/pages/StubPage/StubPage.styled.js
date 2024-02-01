import { Link } from "react-router-dom";
import styled from "styled-components";

export const StubContainer = styled.div`
  border-radius: 10px;
  background: #47364c;
  padding: 22px;
`;

export const Text = styled.p`
  color: #fffbff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
`;

export const StyledLink = styled(Link)`
  color: orange;
  text-decoration: none;
  margin-left: 10px;
`;
