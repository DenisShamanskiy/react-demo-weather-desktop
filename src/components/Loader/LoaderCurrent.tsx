import styled, { keyframes } from "styled-components";

const rotateOne = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`
const rotateTwo = keyframes`
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`
const rotateThree = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`

const LoaderContainer = styled.div`
  position: relative;
  width: 398px;
  height: 262.7px;
  margin: 2rem 0 0 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-main);
  grid-column: 1 / 3;
`;
const Loader = styled.div`
  margin: 70px auto auto auto;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
`
const Inner = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
const One = styled(Inner)`
  left: 0%;
  top: 0%;
  animation: ${rotateOne} 1s linear infinite;
  border-bottom: 3px solid #9eefff;
`
const Two = styled(Inner)`
  right: 0%;
  top: 0%;
  animation: ${rotateTwo} 1s linear infinite;
  border-right: 3px solid #9eefff;
`
const Three = styled(Inner)`
  right: 0%;
  bottom: 0%;
  animation: ${rotateThree} 1s linear infinite;
  border-top: 3px solid #9eefff;
`

// const LoaderFirst = styled.div`
//   width: 60%;
//   height: 29px;
//   margin: 0.7rem 0;
//   border-radius: 20px;
//   animation: ${shimmer} 3s infinite linear;
//   background: linear-gradient(to right, #7eb2e5 4%, #badcff 25%, #7eb2e5 36%);
//   background-size: 1000px 100%;
// `;

// const LoaderSecond = styled(LoaderFirst)`
//   width: 25%;
//   height: 4rem;
// `;

// const LoaderThird = styled(LoaderFirst)`
//   height: 1.5rem;
// `;

export default function LoaderCurrent() {
  return (
    <LoaderContainer>
    <Loader>
      <One/>
      <Two/>
      <Three/>
    </Loader>
      {/* <LoaderFirst></LoaderFirst>
      <LoaderSecond></LoaderSecond>
      <LoaderThird></LoaderThird>
      <LoaderThird></LoaderThird> */}
    </LoaderContainer>
  );
}
