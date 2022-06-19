import React from "react";
// import { useAppSelector } from "redux/hooks/useTypedSelector";
// import { CardSunrise, Title, Text, Description } from "styles/StyledCurrentDetailed1280";
import { StyledSection_2 } from "styles/StyledSection_2";
// import formate from "utils/formate";
// import Alerts1280 from "./Alerts1280";
import Weather from "./Weather";
import Footer from "./Footer";
// import Hourly1280 from "./Hourly";
import Search1280 from "./Search1280";

const Wrapper2: React.FC = () => {

  // const data = useAppSelector(state => state.currentWeather)
  // const alerts = useAppSelector(state => state.oneCall.alerts)

  // const {
  //   timezone,
  //   sys: { sunrise, sunset },
  // } = data;
  
  return (
    <StyledSection_2>
      <Search1280></Search1280>
      <Weather></Weather>
      <Footer/>
    </StyledSection_2>
  );
}

export default Wrapper2;