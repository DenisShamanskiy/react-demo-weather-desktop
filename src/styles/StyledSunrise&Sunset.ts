import styled from "styled-components";
import sunrise from "../images/svg/sunrise.svg";
import sunset from "../images/svg/sunset.svg";

const Container = styled.div`
    grid-column: 1 / 4;
    grid-row: 7 / 9;
    margin: 0;
    padding: 15px;
    border-radius: var(--br-20);
    display: flex;
    flex-direction: column;
    background-color: var(--Lotion);
`;
const Title = styled.h2`
    margin: 0 0 15px 0;
    font-size: 22px;
`;
const Background = styled.div`
    height: 100%;
    padding: 15px;
    border-radius: var(--br-20);
    display: flex;
    align-items: center;
    background-color: var(--Banana-Mania);
`;
const Wrapper = styled.div`
    width: 100%;
    margin: auto 0;
    display: flex;
`;
const Description = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
`;
const IconSunrise = styled.div`
    margin: auto 0 0 0;
    display: flex;
    width: 40px;
    height: 40px;
    background-image: url(${sunrise});
    background-size: contain;
    background-position: center;
`;
const IconSunset = styled(IconSunrise)`
    background-image: url(${sunset});
`;
const Text = styled.p`
    margin: 0 0 8px 5px;
    font-size: 16px;
    font-weight: 300;
`;
const Time = styled.p`
    margin: 0 0 auto 5px;
    color: var(--Vista-Blue);
    font-size: 22px;
    font-weight: 300;
`;

export {
    Container,
    Background,
    Title,
    Wrapper,
    IconSunrise,
    IconSunset,
    Description,
    Text,
    Time,
  };
  