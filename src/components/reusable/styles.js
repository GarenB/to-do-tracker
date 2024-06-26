import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: red;
  font-size: 12px;
`;

export const OuterContainer = styled.div`
  margin: 10px 0;
`;

export const StyledInputField = styled.input`
  height: 36px;
  width: 268px;
  border: 1px solid ${({ hasError }) => (hasError ? "red" : "#ccc")};
  padding-left: 10px;
`;
