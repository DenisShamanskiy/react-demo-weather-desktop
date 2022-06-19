import styled from "styled-components";
import SearchImg from "../images/svg/search.svg";

const StyledSearch = styled.form`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 25px;
  box-sizing: border-box;
  color: var(--third);
  background-color: #dee8f3;
  transition: 0.3s ease-in-out;
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  &:focus-within {
    background: var(--Spanish-Pink);
    transition: 0.3s ease-in-out;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  box-sizing: border-box;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: var(--third);
  &:active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;

const Button = styled.button`
  width: 2rem;
  margin: 0;
  padding: 0;
  background-image: url(${SearchImg});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  &:hover {
    background-size: 60%;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
`;

export { StyledSearch, Input, Button };
