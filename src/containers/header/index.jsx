import {
  Container,
  Ul,
  Li,
  HoverComponent,
  LoginButtonContainer,
  SignupButtonContainer,
  LoginButton,
} from "./style";
import SubSection from "../../components/header/sub-section";

const Header = () => {
  return (
    <Container>
      <Ul>
        <Li>
          one
          <HoverComponent>
            <SubSection>one one</SubSection>
          </HoverComponent>
        </Li>
        <Li>
          two
          <HoverComponent>
            <SubSection>two one</SubSection>
          </HoverComponent>
        </Li>
        <Li>three</Li>
        <Li>four</Li>
        <Li>five</Li>
        <Li>six</Li>
        <Li>eight</Li>
        <LoginButtonContainer>
          <LoginButton to="/login">Log in</LoginButton>
        </LoginButtonContainer>
        <SignupButtonContainer>
          <a>Sign up</a>
        </SignupButtonContainer>
      </Ul>
    </Container>
  );
};

export default Header;
