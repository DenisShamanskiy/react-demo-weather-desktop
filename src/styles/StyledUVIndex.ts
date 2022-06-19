import styled from "styled-components";

const Container = styled.div`
    grid-column: 4 / 6;
    grid-row: 7 / 9;
    margin: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    border-radius: var(--br-20);
    background-color: #ecf2f9;
`;
const Title = styled.h2`
    margin: 0 0 15px 0;
    font-size: 22px;
`;
const Value = styled.p`
  margin: 0;
  font-size: 45px;
  font-weight: 600;
`;
const Description = styled.div`
    margin: auto 0 0 auto;
    font-size: 20px;
    font-weight: 600;
`;

export {
    Container,
    Title,
    Description,
    Value
  };
  