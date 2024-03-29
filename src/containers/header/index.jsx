import {
  Container,
  Ul,
  Li,
  HoverComponent,
  SigninButtonContainer,
  SignupButtonContainer,
  SigninButton,
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
        <SigninButtonContainer>
          <SigninButton to="/signin">Log in</SigninButton>
        </SigninButtonContainer>
        <SignupButtonContainer>
          <SignUpButton to="/signup">Sign up</SignUpButton>
        </SignupButtonContainer>
      </Ul>
    </Container>
  );
};

export default Header;
