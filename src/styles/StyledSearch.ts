import styled from "styled-components";
import IconsSearch from "../images/svg/search.svg";

const Form = styled.form`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 100%;
  margin: 0 0 30px 0;
  padding: 10px;
  border-radius: 25px;
  display: flex;
  background-color: var(--Bright-Gray);
  transition: 0.3s ease-in-out;
  &:focus-within {
    background: var(--Light-Red);
    transition: 0.3s ease-in-out;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  &:active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;
const Button = styled.button`
  min-width: 30px;
  margin: 0;
  padding: 0;
  border: none;
  background-position: center;
  background-size: 50%;
  background-image: url(${IconsSearch});
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0);
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-size: 60%;
    transition: 0.3s ease-in-out;
  }
`;

export { Form, Input, Button };
