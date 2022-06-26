import styled, { keyframes } from "styled-components";
import Arrow from "../images/svg/compass.svg";

const spin = (props: any) => keyframes`
0%{
  transform: rotate(${props.deg - 7}deg)
}
100% {
  transform: rotate(${props.deg + 7}deg)
}
`;
const Container = styled.div`
    grid-column: 6 / 9;
    grid-row: 7 / 9;
    margin: 0;
    padding: 15px;
    border-radius: var(--br-20);
    display: flex;
    flex-direction: column;
    background-color: var(--Lotion);
`;
const Wrapper = styled.div`
    height: 100%;
    margin: 0;
    padding: 15px;
    border-radius: var(--br-20);
    display: grid;
    grid-template-columns: 1fr 90px;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    background-color: var(--Diamond);
`;
const Value = styled.p`
    grid-column: 1 / 2;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
`;
const Compass = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    width: 90px;
    height: 90px;
    margin: auto;
    border: 2px solid;
    border-radius: 100%;
    display: grid;
    grid-template-columns: 1rem 1fr 1rem;
    grid-template-rows: 1rem 1fr 1rem;
    justify-items: center;
    align-items: center;
`;
const North = styled.p`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin: 0;
    font-size: 11px;
    font-weight: 800;
`;
const East = styled(North)`
    grid-column: 3 / 4;
    grid-row: 2 / 3;
`;
const West = styled(North)`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
`;
const South = styled(North)`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
`;
const CompassArrow = styled.div<{deg: number}>`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    width: 100%;
    height: 100%;
    background-image: url(${Arrow});
    background-repeat: no-repeat;
    background-position: center;
    animation: ${(props) => spin(props)} 2s alternate ease-out infinite;
`;

export {
    Container,
    Wrapper,
    Value,
    Compass,
    North,
    East,
    West,
    South,
    CompassArrow,
  };
  