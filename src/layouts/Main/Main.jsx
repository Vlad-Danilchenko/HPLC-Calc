import { MainContainer } from "./Main.styled";

export const Main = ({ children }) => {
  return (
    <main>
      <MainContainer>{children}</MainContainer>
    </main>
  );
};
