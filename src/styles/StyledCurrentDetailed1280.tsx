import styled, { keyframes } from "styled-components";
import Uv from "../images/svg/sun.svg";
import Sun from "../images/svg/sunrise.svg";
import Wind from "../images/svg/wind.svg";
import Fallout from "../images/svg/fallout.svg";
import Thermometer from "../images/svg/thermometer.svg";
import Moisture from "../images/svg/moisture.svg";
import Eye from "../images/svg/visibility.svg";
import Atmosphere from "../images/svg/barometer.svg";
import Arrow from "../images/svg/compass.svg";

interface TitleProps {
  icon: "Uv" | "Sun" | "Wind" | "Fallout" | "Thermometer" | "Moisture" | "Eye" | "Atmosphere"
}

interface InputProps {
  pollution: boolean
}

const spin = (props: any) => keyframes`
0%{
  transform: rotate(${props.deg - 7}deg)
}
100% {
  transform: rotate(${props.deg + 7}deg)
}
`;

const Card = styled.div`
  width: 195px;
  height: 195px;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-main);
  background-color: var(--second);
  backdrop-filter: blur(7px);
  ${"" /* фон */}
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  backdrop-filter: var(--backdrop-filter);
  -webkit-backdrop-filter: var(--webkit-bf);
  border: var(--border);
`;

const Card1280 = styled.div`
  margin: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-main);
  background-color: var(--second);
  backdrop-filter: blur(7px);
 
`

const CardUi = styled(Card1280)`
  grid-column: 4 / 6;
  grid-row: 7 / 9;
  margin: 0;
  border-radius: var(--br-20);
  background-color: #ecf2f9;
`;

const CardFallout = styled(Card1280)`
  grid-column: 7 / 9;
  grid-row: 5 / 7;
  margin: 0;
  border-radius: var(--br-20);
  background-color: #ecf2f9;
`;

const CardFeels = styled(Card1280)`
  grid-column: 5 / 7;
  grid-row: 6 / 8;
`;

const CardHumidity = styled(Card1280)`
  grid-column: 5 / 7;
  grid-row: 8 / 10;
`;

const CardVisibility = styled(Card1280)`
  grid-column: 7 / 9;
  grid-row: 6 / 8;
`;

const CardPressure = styled(Card1280)`
  grid-column: 7 / 9;
  grid-row: 8 / 10;
`;



const CardWind = styled(Card1280)`
  grid-column: 6 / 9;
  grid-row: 7 / 9;
  margin: 0;
  border-radius: var(--br-20);
  background-color: #ecf2f9;
`;






const handleIconType = (icon: string) => {
  switch (icon) {
    case "Uv":
      return `url(${Uv})`;
    case "Sun":
      return `url(${Sun})`;
    case "Wind":
      return `url(${Wind})`;
    case "Fallout":
      return `url(${Fallout})`;
    case "Thermometer":
      return `url(${Thermometer})`;
    case "Moisture":
      return `url(${Moisture})`;
    case "Eye":
      return `url(${Eye})`;
    case "Atmosphere":
      return `url(${Atmosphere})`;
  }
  return undefined
};

const Title = styled.h2<TitleProps>`
  margin: 0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;

  &::before {
    content: ${({ icon }) => handleIconType(icon)};
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 0.3rem;
    align-items: center;
    justify-content: center;
    background-size: contain;
  }
`;

const Text = styled.p`
  margin: 0 0 auto 0;
  font-size: 1.7rem;
  font-weight: 300;
`;

const TextRight = styled.p`
  margin: auto 0 0 auto;
  text-align: end;
`;

const Description = styled.p`
  margin: auto 0 0 auto;
  font-size: 1.2rem;
  font-weight: 400;
`;

const Compass = styled.div`
  width: 80px;
  height: 80px;
  margin: auto 0 0 auto;
  display: grid;
  grid-template-columns: 1rem 1fr 1rem;
  grid-template-rows: 1rem 1fr 1rem;
  justify-items: center;
  align-items: center;
  border: 1px solid;
  border-radius: 100%;
`;

const North = styled.p`
  margin: 0;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  font-size: 0.7rem;
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
  width: 100%;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-position: center;
  animation: ${(props) => spin(props)} 2s alternate ease-out infinite;
`;

const Input = styled.input<InputProps>`
  height: 11px;
  -webkit-appearance: none;
  margin: ${(props) => (props.pollution ? `0.5rem 0 0 auto` : `0.5rem 0 0 0`)};
  width: ${(props) => (props.pollution ? `164.2px` : `100%`)};
  background: transparent;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    background: ${(props) =>
      props.pollution
        ? `linear-gradient(to right, green, yellow, red)`
        : `linear-gradient(to right, green, yellow, orange, red, violet)`};
    border-radius: 16px;
  }
  &::-webkit-slider-thumb {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: black;
    -webkit-appearance: none;
    margin-top: 0px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: ${(props) =>
      props.pollution
        ? `linear-gradient(to right, green, yellow, red)`
        : `linear-gradient(to right, green, yellow, orange, red, violet)`};
  }
  &::-moz-range-track {
    width: 100%;
    height: 5px;
    background: ${(props) =>
      props.pollution
        ? `linear-gradient(to right, green, yellow, red)`
        : `linear-gradient(to right, green, yellow, orange, red, violet)`};
    border-radius: 16px;
  }
  &::-moz-range-thumb {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: black;
    border: none;
  }
  &::-ms-track {
    width: 100%;
    height: 5px;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: ${(props) =>
      props.pollution
        ? `linear-gradient(to right, green, yellow, red)`
        : `linear-gradient(to right, green, yellow, orange, red, violet)`};
    border: 0px solid #000000;
    border-radius: 32px;
    box-shadow: 0px 0px 0px #000000;
  }
  &::-ms-fill-upper {
    background: ${(props) =>
      props.pollution
        ? `linear-gradient(to right, green, yellow, red)`
        : `linear-gradient(to right, green, yellow, orange, red, violet)`};
    border-radius: 32px;
  }
  &::-ms-thumb {
    margin-top: 1px;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: black;
  }
  &:focus::-ms-fill-lower {
    background: ${(props) =>
      props.pollution
        ? `linear-gradient(to right, green, yellow, red)`
        : `linear-gradient(to right, green, yellow, orange, red, violet)`};
  }
  &:focus::-ms-fill-upper {
    background: ${(props) =>
      props.pollution
        ? `linear-gradient(to right, green, yellow, red)`
        : `linear-gradient(to right, green, yellow, orange, red, violet)`};
  }
`;

export {
  Card,
  Title,
  Text,
  TextRight,
  Description,
  Input,
  Compass,
  North,
  East,
  West,
  South,
  CompassArrow,
  CardUi,
  CardFallout,
  CardFeels,
  CardHumidity,
  CardVisibility,
  CardPressure,
  CardWind
};
