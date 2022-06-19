import styled from "styled-components";
import fff from "../images/svg/No-Cloud-Security.svg";

const Container = styled.article`
  grid-column: 1 / 9;
  grid-row: 3 / 5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
 `;
const List = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background-color: #ecf2f9;
  border-radius: var(--br-20);
`;
const Icon = styled.img`
  width: 100%;
  margin-bottom: 20px;
  background-color: #ffd6d6;
  border-radius: var(--br-20);
`;
const Day = styled.p`
  width: 100%;
  margin: auto;
  padding: 0;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;
const Temperature = styled.p`
  margin: auto 0;
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorBlock = styled.div`
  width: 200px;
  min-height: 200px;
  /* border: 1px solid red; */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${fff});
  background-repeat: no-repeat;
  background-position: center;
`;

export {
  Container,
  List,
  Item,
  ErrorBlock,
  Day,
  Icon,
  Temperature,
};
