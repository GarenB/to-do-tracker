import {
  Container,
  InnerContainer,
  FooterList,
  FooterListItem,
  FooterHeader,
  FooterSection,
  BottomContainer,
} from "./style";

const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <FooterSection>
          <FooterHeader>One</FooterHeader>
          <FooterList>
            <FooterListItem>One one</FooterListItem>
            <FooterListItem>One two</FooterListItem>
            <FooterListItem>One three</FooterListItem>
            <FooterListItem>one four</FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Two</FooterHeader>
          <FooterList>
            <FooterListItem>Two one</FooterListItem>
            <FooterListItem>Two two</FooterListItem>
            <FooterListItem>Two three</FooterListItem>
            <FooterListItem>Two four</FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Three</FooterHeader>
          <FooterList>
            <FooterListItem>Three one</FooterListItem>
            <FooterListItem>Three two</FooterListItem>
            <FooterListItem>Three three</FooterListItem>
            <FooterListItem>Three four</FooterListItem>
          </FooterList>
        </FooterSection>
      </InnerContainer>
      <BottomContainer>
        Copyright © 2024 Hello Inc. All rights reserved.
      </BottomContainer>
    </Container>
  );
};

export default Footer;
