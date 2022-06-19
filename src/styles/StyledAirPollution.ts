import styled from "styled-components";

const Container = styled.article`
  grid-column: 1 / 7;
  grid-row: 5 / 7;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ecf2f9;
  border-radius: var(--br-20);
`;
const Title = styled.h2`
font-size: 22px;
margin: 0;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7rem;
  border-radius: 15px;
  background-color: #9EE362;
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

export {
  Container,
  Title,
  Wrapper,
  Description,
  List,
  Item,
  ChemicalFormula,
  Value,
};
