import styled from "styled-components";

interface IShowProps {
    show: boolean
  }

const Overlay = styled.div<IShowProps>`
    visibility: ${(props) => (props.show ? `visible` : `hidden`)};
    opacity: ${(props) => (props.show ? `1` : `0`)};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 500ms;
    z-index: 2;

`;
  
const Popup = styled.div<IShowProps>`
    visibility: ${(props) => (props.show ? `visible` : `hidden`)};
    opacity: ${(props) => (props.show ? `1` : `0`)};
    width: 398px;
    min-width: 398px;
    height: 200px;
    margin: auto;
    padding: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: var(--radius-main);
    position: relative;
    transition: all 1s ease-in-out;
`;

const Close = styled.button`
    width: 100px;
    height: 30px;
    margin: auto auto 0.5rem;
    background-color: #fff;
    transition: all 300ms;
    border: 1px solid black;
    border-radius: var(--radius-main);
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

const Warning = styled.p`
    margin: 1rem auto;
    font-size: 1.3rem;
    font-weight: 600;
`;
const Text = styled.p`
    margin: 1rem auto;
`;

export {
    Overlay,
    Popup,
    Close,
    Warning,
    Text,
};