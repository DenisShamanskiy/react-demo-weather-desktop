import React, { useEffect } from "react";
import GlobalStyles from "styles/Global";
import { useDispatch } from "react-redux";
import { getLocalWeather } from "redux/actions";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import StyledApp from "styles/StyledApp";
import CustomPopup from "components/CustomPopup";
import Section_1 from "components/Section_1";
import Section_2 from "components/Section_2";

const App: React.FC = () => {

  const dispatch = useDispatch()
  
  const show = useAppSelector(state => state.popupAlert)

  useEffect(() => {
    dispatch(getLocalWeather())
  }, []);  
  
  return (
    <>
      <GlobalStyles />

      {show ? <CustomPopup /> : "" }

      <StyledApp>
        <Section_1></Section_1>
        <Section_2></Section_2>
      </StyledApp>
    </>
  );
}

export default App;
