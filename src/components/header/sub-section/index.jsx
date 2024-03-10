import { Container, Text, InnerContainer } from "./style";

const SubSection = ({ children }) => {
  return (
    <Container>
      <InnerContainer>
        <Text>{children}</Text>
      </InnerContainer>
    </Container>
  );
};

export default SubSection;
