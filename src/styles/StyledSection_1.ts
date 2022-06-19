import styled from "styled-components";

const StyledSection_1 = styled.div`
position: relative;
grid-column: 1 / 9;
width: 900px;
height: 900px; 
padding: 30px;
display: grid;
gap: 10px;
grid-template-columns: repeat(8, 1fr);
grid-template-rows: repeat(8, 1fr);

background-color: var(--Bright-Gray);
`;

export { StyledSection_1 };