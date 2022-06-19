import styled from "styled-components";

const Container = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 7;
  width: 100%;
  margin: 0 0 30px 0;
  height: 600px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: var(--Vista-Blue);
  border-radius: var(--br-20);
  color: var(--Lotion);
`;
const City = styled.h1`
  margin: auto 0;
  font-weight: 600;
  font-size: 26px;
`
const Temperature = styled.p`
  margin: auto 0;
  font-weight: 400;
  font-size: 60px;
`;
const Description = styled.p`
  margin: auto 0;
  font-weight: 600;
  font-size: 17px;
`;
const Icon = styled.img`
  width: 80px;
  height: 80px;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: auto 0;
`;
const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
  font-size: 14px;
  &:last-child {
    margin: 0;
  }
`
const DetailTitle = styled.p`
  width: 50%;
  display: block;
  margin: 0 15px 0 0;
`
const DetailValue = styled.p`
  width: 50%;
  display: block;
  margin: 0 auto 0 0;
  padding: 0 0 0 15px;
  border-left: 1px solid var(--Lotion);
`

export { Container, City, Temperature, Description, Detail, DetailTitle, DetailValue, Icon, Wrapper };
