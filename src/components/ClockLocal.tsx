import React, { useEffect, useState } from "react";
import { Col, CurrentDate, Greeting, LocalTime, StyledClockLocal } from "styles/StyledClock";
import { daysWeekLong, monthNames } from "utils/constants";
import { formateDayWeek, formateTime24, greeting } from "utils/functions";

const ClockLocal: React.FC = () => {

  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      }, 5000);
      return () => clearInterval(interval);
    }, []);

return (
    <StyledClockLocal>
      <LocalTime>{formateTime24(date.getHours())}<Col>:</Col>{formateTime24(date.getMinutes())}</LocalTime>
      <CurrentDate>{formateDayWeek(daysWeekLong, monthNames)}</CurrentDate>
      <Greeting>{greeting(date.getHours())}</Greeting>
    </StyledClockLocal>
  );
}

export default ClockLocal