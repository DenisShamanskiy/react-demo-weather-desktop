import styled from "styled-components";

const Container = styled.article`
  grid-column: 1 / 2;
  grid-row: 2 / 7;
  width: 100%;
  height: 600px;
  margin: 0;
  padding: 15px;
	border-radius: var(--br-20);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
	background-color: var(--Vista-Blue);
  color: var(--Lotion);
  text-align: center;
`;
const City = styled.h1`
  margin: auto 0;
  font-size: 26px;
  font-weight: 600;
`
const Temperature = styled.p`
  margin: auto 0;
  font-size: 60px;
  font-weight: 400;
`;
const Description = styled.p`
  margin: auto 0;
  font-size: 17px;
  font-weight: 600;
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
  margin: 0 15px 0 0;
  display: block;
`
const DetailValue = styled.p`
  width: 50%;
  margin: 0 auto 0 0;
  padding: 0 0 0 15px;
  display: block;
  border-left: 1px solid var(--Lotion);
`

export { Container, City, Temperature, Description, Detail, DetailTitle, DetailValue, Icon, Wrapper };
