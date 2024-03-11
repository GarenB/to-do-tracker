import styled from "styled-components";

export const Container = styled.div`
  bottom: 0px;
  left: 0px;
  position: fixed;
  background-color: black;
  width: 100%;
  height: 300px;
  color: white;
`;

export const InnerContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  background-color: red;
  height: 100%;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const FooterSection = styled.div``;

export const FooterHeader = styled.div``;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FooterListItem = styled.li``;
