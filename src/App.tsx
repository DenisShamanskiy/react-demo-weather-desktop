import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getLocalWeather } from "redux/actions";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import GlobalStyles from "styles/Global";
import SectionOne from "components/SectionOne";
import SectionTwo from "components/SectionTwo";
import CustomPopup from "components/CustomPopup";

const Container = styled.div`
  width: 1280px;
  display: flex;
`;

const App: React.FC = () => {

  const dispatch = useDispatch()
  
  const show = useAppSelector(state => state.popupAlert)

  useEffect(() => {
    dispatch(getLocalWeather())
  }, [dispatch]);  
  
  return (
    <>
      <GlobalStyles />

      { show && <CustomPopup/> }

      <Container>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
      </Container>
    </>
  );
}

export default App;
