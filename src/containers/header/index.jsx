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
import { StyledLink } from "../../components/reusable/styles";

const Header = () => {
  return (
    <Container>
      <Ul>
        <Li>
          <StyledLink to="/">Home</StyledLink>
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
