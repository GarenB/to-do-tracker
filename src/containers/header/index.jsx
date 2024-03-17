import {
  Container,
  Ul,
  Li,
  HoverComponent,
  LoginButtonContainer,
  SignupButtonContainer,
  LoginButton,
  SignUpButton,
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
          <SignUpButton to="/signup">Sign up</SignUpButton>
        </SignupButtonContainer>
      </Ul>
    </Container>
  );
};

export default Header;
