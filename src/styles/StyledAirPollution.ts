import styled from "styled-components";

interface InputProps {
  pollution: boolean
}

const Container = styled.article`
  grid-column: 1 / 7;
  grid-row: 5 / 7;
  width: 100%;
  padding: 15px;
  border-radius: var(--br-20);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--Lotion);
`;
const Title = styled.h2`
  margin: 0;
  font-size: 22px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Description = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;
const Item = styled.li`
  width: 100%;
  height: 85px;
  margin-right: 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Inchworm);
  &:last-child {
    margin: 0
  }
`;
const Value = styled.p`
  margin: 21px auto auto auto;
  font-size: 14px;
  font-weight: 800;
`;
const ChemicalFormula = styled.p`
  margin: auto auto 21px auto;
  font-size: 14px;
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
  Container,
  Title,
  Wrapper,
  Description,
  List,
  Item,
  ChemicalFormula,
  Value,
  Input
};
