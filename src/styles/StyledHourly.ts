import styled from "styled-components";

const Container = styled.article`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  border-radius: var(--br-20);
  grid-column: 1 / 2;
  grid-row: 7 / 8;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
  }
`;

const Item = styled.li`
  min-width: 65px;
  height: 100px;
  margin: 6px;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--Spanish-Pink);
  color: var(--Black-Coral);
  border-radius: var(--br-20);
`;

const Time = styled.p`
  width: 100%;
  height: 20px;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 0.8rem;
  line-height: 20px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 auto;
`;

const Temperature = styled.p`
  width: 100%;
  height: 20px;
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
`;

export { Container, List, Item, Time, Icon, Temperature };
