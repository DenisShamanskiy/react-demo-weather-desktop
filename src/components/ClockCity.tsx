import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { CityTime, Col } from "styles/StyledClock";
import { formateTime24 } from "utils/functions";

const ClockCity: React.FC = () => {
    
  const { timezone } = useAppSelector(state => state.currentWeather)

  const shift = (timezone - 10800) * 1000;

  const [hours, setHours] = useState(new Date(Date.now() + shift).getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date(Date.now() + shift).getHours());
      setMinutes(new Date().getMinutes());
      }, 5000);
      return () => clearInterval(interval);
  }, [shift]);

return (
    <CityTime>Местное время: {formateTime24(hours)}<Col>:</Col>{formateTime24(minutes)}</CityTime>
  );
}

export default ClockCity