import styled from "styled-components";
const Container = styled.div`
    grid-column: 7 / 9;
    grid-row: 5 / 7;
    margin: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    border-radius: var(--br-20);
    background-color: #ecf2f9;
`;
const Value = styled.p`
    grid-column: 1 / 2;
    margin: 0;
    font-size: 45px;
    font-weight: 600;
`;
const TextRight = styled.p`
    margin: auto 0 0 auto;
    text-align: end;
`;

export {
    Container,
    Value,
    TextRight
  };
  