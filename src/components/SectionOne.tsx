import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { Container } from "styles/StyledSectionOne";

import AirPollution from "./AirPollution";
import Alerts from "./Alerts";
import ClockLocal from "./ClockLocal";
import Daily from "./Daily";
import LoaderSectionOne from "./Loader/LoaderSectionOne";
import Precipitation from "./Precipitation";
import SunriseAndSunset from "./SunriseAndSunset";
import UVIndex from "./UVIndex";
import Wind from "./Wind";

const SectionOne: React.FC = () => {

  const { loading } = useAppSelector((state => state.loading))
  const alerts = useAppSelector(state => state.oneCall.alerts)

  return (
    loading
    ?
    <LoaderSectionOne/> 
    :
    <Container>
        <ClockLocal></ClockLocal>
        {alerts !== undefined && alerts.length > 0 && <Alerts />}
        <Daily />
        <AirPollution />
        <Precipitation />
        <SunriseAndSunset />
        <UVIndex />
        <Wind />
      </Container>
    
  );
}

export default SectionOne;