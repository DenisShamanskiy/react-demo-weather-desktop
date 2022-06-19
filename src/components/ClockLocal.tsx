import React, { useEffect, useState } from "react";
import { Col, CurrentDate, Greeting, LocalTime, StyledClockLocal } from "styles/StyledClock";
import { daysWeekLong, monthNames } from "utils/constants";
import { formateDayWeek, formateLocalTime, greeting } from "utils/functions";

const ClockLocal: React.FC = (): React.ReactElement => {

  const [date, setDate] = useState(new Date());
  
useEffect(() => {

  const interval = setInterval(() => {
    setDate(new Date());
    }, 2000);
      
    return () => clearInterval(interval);
  }, []);

return (
    <StyledClockLocal>
      <LocalTime>{formateLocalTime(date.getHours())}<Col>:</Col>{formateLocalTime(date.getMinutes())}</LocalTime>
      <CurrentDate>{formateDayWeek(daysWeekLong, monthNames)}</CurrentDate>
      <Greeting>{greeting(date.getHours())}</Greeting>
    </StyledClockLocal>
  );
}

export default ClockLocal