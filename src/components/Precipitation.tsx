import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { Container, TextRight, Value } from "styles/StyledPrecipitation";
import { Title } from "styles/StyledUVIndex";

const Precipitation: React.FC = () => {

    const { rain, snow } = useAppSelector(state => state.currentWeather)

    const getPrecipitation = () => rain ? `${rain["1h"]} мм` : snow ? `${snow["1h"]} мм` : "0 мм";

    return (
        <Container>
            <Title>{rain ? "Дождь" : snow ? "Снег" : "Без осадков"}</Title>
            <Value>{getPrecipitation()}</Value>
            <TextRight>за последний час</TextRight>
        </Container>
    );
}

export default Precipitation