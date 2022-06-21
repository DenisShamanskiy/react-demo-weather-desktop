import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 900px;
    height: 900px; 
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    gap: 10px;
    background-color: var(--Bright-Gray);
`;

export { Container };