import { Container, Ul, Li, HoverComponent } from "./style";

const Header = () => {
  return (
    <Container>
      <Ul>
        <Li>
          one
          <HoverComponent>
            <div>This is the hover component 1.</div>
          </HoverComponent>
        </Li>
        <Li>two</Li>
        <Li>three</Li>
        <Li>four</Li>
        <Li>five</Li>
        <Li>six</Li>
        <Li>eight</Li>
      </Ul>
    </Container>
  );
};

export default Header;
