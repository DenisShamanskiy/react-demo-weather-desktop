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

const LoaderContainer = styled.div`
  width: 398px;
  height: 398px;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-main);
  grid-column: 1 / 3;
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
  justify-content: space-between;
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

const List = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Item = styled.div`
  height: 2rem;
  border-radius: var(--radius-main);

  animation: ${shimmer} 3s infinite linear;
  background: linear-gradient(to right, #a3d1ff 4%, #8dc6ff 25%, #a3d1ff 36%);
  background-size: 1000px 100%;
`;

export default function LoaderDaily() {
  return (
    <LoaderContainer>
      <WrapperTitle>
        <Icon></Icon>
        <Title></Title>
      </WrapperTitle>
      <List>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </List>
    </LoaderContainer>
  );
}
