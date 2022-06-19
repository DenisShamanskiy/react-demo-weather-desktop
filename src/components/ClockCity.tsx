import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { Clock } from "styles/StyledClock";

const ClockCity: React.FC = (): React.ReactElement => {
    
const timezone = useAppSelector(state => state.oneCall.timezone)

const [time, setTime] = useState(new Date().toLocaleTimeString('ru-RU', { timeZone: timezone, weekday: "long", hour: "numeric", minute: "numeric" }));

useEffect(() => {

  const interval = setInterval(() => {
    setTime(new Date().toLocaleTimeString('ru-RU', { timeZone: timezone, weekday: "long",hour: "numeric", minute: "numeric" }));
    }, 5000);
      
    return () => clearInterval(interval);
  }, [timezone]);

return (
    <Clock>Местное время: {time}</Clock>
  );
}

export default ClockCity