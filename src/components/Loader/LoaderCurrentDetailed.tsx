// import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
   0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const Wrapper = styled.div`
  width: 398px;
  display: grid;
  grid-template-columns: repeat(2, 195px);
  grid-template-rows: repeat(4, 195px);
  gap: 8px;
  grid-column: 1 / 3;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-main);
  background: rgba(255, 255, 255, 0.5);
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  backdrop-filter: var(--backdrop-filter);
  -webkit-backdrop-filter: var(--webkit-bf);
`;

const WrapperTitle = styled.div`
  width: 100%;
  height: 25px;
  margin-bottom: 0.9rem;
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  width: 100%;
  border-radius: var(--radius-main);

  animation: ${shimmer} 3s infinite linear;
  background: linear-gradient(to right, #a3d1ff 4%, #8dc6ff 25%, #a3d1ff 36%);
  background-size: 1000px 100%;
`;

const Icon = styled.div`
  min-width: 25px;
  height: 25px;
  margin-right: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  animation: ${shimmer} 3s infinite linear;
  background: linear-gradient(to right, #a3d1ff 4%, #8dc6ff 25%, #a3d1ff 36%);
  background-size: 1000px 100%;
  border-radius: 50%;
`;

const Description = styled.div`
  width: 100%;
  height: 25px;
  margin: 0 auto auto 0;
  border-radius: var(--radius-main);

  animation: ${shimmer} 3s infinite linear;
  background: linear-gradient(to right, #a3d1ff 4%, #8dc6ff 25%, #a3d1ff 36%);
  background-size: 1000px 100%;
`;

const DescriptionRight = styled(Description)`
  width: 70%;
  margin: auto 0 0 auto;
`;

export default function StyledCurrentDetailed() {
  return (
    <Wrapper>
      <Item>
        <WrapperTitle>
          <Icon></Icon>
          <Title></Title>
        </WrapperTitle>
        <Description></Description>
        <DescriptionRight></DescriptionRight>
      </Item>
      <Item>
        <WrapperTitle>
          <Icon></Icon>
          <Title></Title>
        </WrapperTitle>
        <Description></Description>
        <DescriptionRight></DescriptionRight>
      </Item>
      <Item>
        <WrapperTitle>
          <Icon></Icon>
          <Title></Title>
        </WrapperTitle>
        <Description></Description>
        <DescriptionRight></DescriptionRight>
      </Item>
      <Item>
        <WrapperTitle>
          <Icon></Icon>
          <Title></Title>
        </WrapperTitle>
        <Description></Description>
        <DescriptionRight></DescriptionRight>
      </Item>
      <Item>
        <WrapperTitle>
          <Icon></Icon>
          <Title></Title>
        </WrapperTitle>
        <Description></Description>
        <DescriptionRight></DescriptionRight>
      </Item>
      <Item>
        <WrapperTitle>
          <Icon></Icon>
          <Title></Title>
        </WrapperTitle>
        <Description></Description>
        <DescriptionRight></DescriptionRight>
      </Item>
      <Item>
        <WrapperTitle>
          <Icon></Icon>
          <Title></Title>
        </WrapperTitle>
        <Description></Description>
        <DescriptionRight></DescriptionRight>
      </Item>
      <Item>
        <WrapperTitle>
          <Icon></Icon>
          <Title></Title>
        </WrapperTitle>
        <Description></Description>
        <DescriptionRight></DescriptionRight>
      </Item>
    </Wrapper>
  );
}
