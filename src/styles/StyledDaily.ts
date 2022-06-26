import styled from "styled-components";

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
  border-radius: var(--br-20);
  display: flex;
  flex-direction: column;
  background-color: var(--Lotion);
`;
const Icon = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border-radius: var(--br-20);
  background-color: var(--Light-Red);
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
  width: 100%;
  height: 100%;
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
`;

export {
  Container,
  List,
  Item,
  Day,
  Icon,
  Temperature,
};
