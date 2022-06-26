import styled, { keyframes } from "styled-components";

const mymove = keyframes`
    0% {
        opacity: 1.0;
    }
    50% {
        opacity: 0;
        text-shadow: none;
    }
    100% {
        opacity: 1.0;
    }	
`;

const CityTime = styled.div`
    height: 20px;
    margin: 0 ;
    font-weight: 600;
`;
const ContainerLocalTime = styled.article`
    grid-column: 1 / 4;
    grid-row: 1 / 3;
    margin: 0 auto auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const LocalTime = styled.p`
    margin: 0 auto 25px 0;
    color: var(--Vista-Blue);
    font-size: 50px;
    font-weight: 700;
`;
const Col = styled.span`
    animation: ${mymove} 1.1s ease infinite;
`;
const CurrentDate = styled.p`
    margin: 0 auto 25px 0;
    font-size: 20px;
    font-weight: 700;
`;
const Greeting = styled.p`
    margin: 0 auto 0 0;
    color: var(--Vista-Blue);
    font-size: 35px;
    font-weight: 700;
`;

export { CityTime, ContainerLocalTime, LocalTime, Col, CurrentDate, Greeting };
