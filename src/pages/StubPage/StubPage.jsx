import { StubContainer, StyledLink, Text } from "./StubPage.styled";

export const StubPage = () => {
  return (
    <StubContainer>
      <Text>Привіт друже!</Text>
      <Text>Наразі даний проект, досі, знаходиться на стадії розробки.</Text>
      <Text>
        Проте ти все ще можеш використовувати звичний
        <StyledLink to="/waterCounter">калькулятор розбіжності</StyledLink>.
      </Text>
      <Text>
        Рекомендую переглянути нове доповнення
        <StyledLink to="/MobPhasePage">MobPhase</StyledLink>, в якому ти зможеш
        розрахувати кількість рухомих фаз для твоїх вдалих експериментів.
      </Text>
    </StubContainer>
  );
};
