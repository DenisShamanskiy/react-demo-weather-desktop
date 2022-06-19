import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { Container, Text, Time, Wrapper, IconSunrise, IconSunset, Title, Background, Description } from "styles/StyledSunrise&Sunset";
import formate from "utils/formate";

const SunriseAndSunset: React.FC = (): React.ReactElement => {
    
    const { timezone, sys: { sunrise, sunset } } = useAppSelector(state => state.currentWeather)
    
    return (
    <Container>
        <Title>Восход и закат</Title>
        <Background>
        <Wrapper>
          <IconSunrise/>
            <Description>
              <Text>Восход</Text>
              <Time>{formate.time(sunrise, timezone)}</Time>
            </Description>
          <IconSunset/>
            <Description>
              <Text>Закат</Text>
              <Time>{formate.time(sunset, timezone)}</Time>
            </Description>
        </Wrapper>
        </Background>
    </Container>
  );
}

export default SunriseAndSunset

