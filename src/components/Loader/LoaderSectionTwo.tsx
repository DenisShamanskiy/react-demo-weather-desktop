import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`
   0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;
const shimmerEffect = css`
    border-radius: var(--br-loader);
    animation: ${shimmer} 3s infinite linear;
    background: linear-gradient(to right, #d5dae7 5%, var(--Lotion) 25%, #d5dae7 35%);
    background-size: 1000px 100%;
`;
const LoaderContainer = styled.div`
    width: 380px;
    height: 900px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    background-color: var(--Lotion);
`;

const Search = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
    ${shimmerEffect}
    border-radius: 25px;
`;
const Weather = styled.div`
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
const City = styled.div`
    width: 50%;
    height: 30px;
    margin: auto 0;
    ${shimmerEffect}
`;
const Icon = styled.div`
    width: 80px;
    height: 80px;
    ${shimmerEffect}
`;
const Temperature = styled.div`
    width: 95px;
    height: 69px;
    margin: auto 0;
    ${shimmerEffect}
`;
const Description = styled.div`
    width: 193px;
    height: 20px;
    margin: auto 0;
    ${shimmerEffect}
`;
const Detail = styled.div`
    width: 247px;
    height: 62.3px;
    margin: auto 0;
    ${shimmerEffect}
`;
const Hourly = styled.div`
    width: 100%;
    height: 112px;
    margin: 0;
    display: flex;
    overflow: hidden;
`;
const Item = styled.div`
    min-width: 65px;
    height: 100px;
    margin: 6px;
    ${shimmerEffect}
    border-radius: var(--br-20);
`;

export default function LoaderSectionTwo() {
  return (
    <LoaderContainer>
        <Search/>
        <Weather>
            <City/>
            <Icon/>
            <Temperature/>
            <Description/>
            <Detail/>
            <Hourly>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </Hourly>
        </Weather>
    </LoaderContainer>
  );
}
