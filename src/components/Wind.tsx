import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { Title } from "styles/StyledUVIndex";
import { Compass, CompassArrow, Container, Wrapper, Value, East, North, South, West } from "styles/StyledWind";

const Wind: React.FC = (): React.ReactElement => {

    const { wind: { speed, deg, gust } } = useAppSelector(state => state.currentWeather)

    return (
        <Container>
            <Title>Ветер</Title>
            <Wrapper>
                <Value>Скорость {`${Math.round(speed)} м/с`}</Value>
                {gust && <Value>Порывы до {`${Math.round(gust)} м/с`}</Value>}
                <Compass>
                    <North>N</North>
                    <East>E</East>
                    <West>W</West>
                    <South>S</South>
                    <CompassArrow deg={deg}></CompassArrow>
                </Compass>
            </Wrapper>
        </Container>
  );
}

export default Wind

