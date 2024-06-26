import styled from "styled-components";

import { StyledLink } from "../../components/reusable/styles";

export const Container = styled.div`
  position: relative;
  background-color: red;
  background-color: rgba(29, 29, 31, 0.72);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(225, 225, 225, 0.24);
  height: 40px;
`;

export const Ul = styled.ul`
  margin: 0 auto;
  display: flex;
  list-style: none;
  max-width: 1024px;
  width: auto;
  justify-content: center;
  color: white;
  height: 40px;
`;

export const HoverComponent = styled.div`
  width: 100%;
  height: 0px;
  background-color: #f0f0f0;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  transition: height 0.5s ease-out;
`;

export const Li = styled.li`
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${HoverComponent} {
    height: 400px;
  }
`;

export const SigninButtonContainer = styled.div`
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SigninButton = styled(StyledLink)`
  width: 70px;
  background-color: #ccc;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  background-color: #0095f6;
  font: 14px;
`;

export const SignupButtonContainer = styled.div`
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0095f6;
`;

export const SignUpButton = styled(StyledLink)`
  color: #0095f6;
`;
