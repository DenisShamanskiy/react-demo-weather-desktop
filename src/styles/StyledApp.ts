import styled from "styled-components";

const StyledApp1280 = styled.div`
  width: 1280px;
  margin: auto;
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 50px repeat(8, 80px);
`;

const StyledWrapper1 = styled.div`
grid-column: 1 / 9;
width: 100%;
height: 100%;
background-color: green;
`;

export default StyledApp1280;
export { StyledApp1280, Wrapper, StyledWrapper1 };
