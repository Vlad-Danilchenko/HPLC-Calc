import { StubContainer, StyledLink, Text } from "./StubPage.styled";

export const StubPage = () => {
  return (
    <StubContainer>
      <Text>This project is under development.</Text>
      <Text>
        However, you can use ready-made solutions such as
        <StyledLink to="/waterCounter">the discrepancy calculator.</StyledLink>
      </Text>
    </StubContainer>
  );
};
