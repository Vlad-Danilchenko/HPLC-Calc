import { Container } from "../../components/Container/Container";

export const Main = ({ children }) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};
