import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { StyledSection_1 } from "styles/StyledSection_1";

import AirPollution from "./AirPollution";
import Alerts from "./Alerts";
import ClockLocal from "./ClockLocal";
import Daily1280 from "./Daily";
import Precipitation from "./Precipitation";
import SunriseAndSunset from "./SunriseAndSunset";
import UVIndex from "./UVIndex";
import Wind from "./Wind";

const Section_1: React.FC = () => {

    const alerts = useAppSelector(state => state.oneCall.alerts)

  return (
    <StyledSection_1>
      <ClockLocal></ClockLocal>
      {alerts !== undefined && alerts.length > 0 && <Alerts/>}
      <Daily1280/>
      <AirPollution/>
      <Precipitation/>
      <SunriseAndSunset/>
      <UVIndex/>
      <Wind/>
    </StyledSection_1>
  );
}

export default Section_1;