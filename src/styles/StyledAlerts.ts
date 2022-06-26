import styled from "styled-components";
import ExclamationCircle from "../images/svg/exclamation-circle.svg";
import PlusCircle from "../images/svg/plus-circle.svg";
import DashCircle from "../images/svg/dash-circle.svg";

interface OpenProps {
  open: boolean
}

const StyledAlerts = styled.article`
  position: absolute;
  grid-column: 5 / 9;
  grid-row: 1 / 2;
  width: 100%;
  border-radius: 25px;
  background-color: var(--Linen);
  cursor: pointer;
`;
const Header = styled.h2<OpenProps>`
  margin: 0;
  padding: 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  transition: all 0.5s;
  &::before {
    content: url(${ExclamationCircle});
    min-width: 20px;
    height: 20px;
    margin-right: 15px;
  }
  &::after {
    content: ${(props) =>
      props.open ? `url(${DashCircle})` : `url(${PlusCircle})`};
    min-width: 20px;
    height: 20px;
    margin-left: auto;
    transition: transform 0.5s ease-in-out;
    transform: ${(props) => (props.open ? `rotate(-360deg)` : ``)};
  }
`;
const Content = styled.ul<OpenProps>`
  max-height: ${(props) => (props.open ? `365px` : `0`)};
  margin: 0;
  padding: ${(props) => (props.open ? `10px 30px` : ``)};
  border-radius: ${(props) =>
    props.open
      ? `0 0 var(--radius-main) var(--radius-main)`
      : `var(--radius-main)`};
  border-top: ${(props) => (props.open ? `1px solid var(--Bright-Gray)` : ``)};
  overflow: ${(props) => (props.open ? `scroll` : `hidden`)};
  opacity: ${(props) => (props.open ? `1` : `0`)};
  transition: all 0.5s;
  cursor: ${(props) => (props.open ? `pointer` : ``)};
  
`;
const Item = styled.li`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--Bright-Gray);
  &:last-child {
    margin: 0;
    border-bottom: none;
  }
`;
const Event = styled.p`
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 400;
`;

export { StyledAlerts, Header, Content, Item, Event, Text };
