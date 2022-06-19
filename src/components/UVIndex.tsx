import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { Input } from "styles/StyledCurrentDetailed1280";
import { Container, Description, Title, Value } from "styles/StyledUVIndex";
import { getUviDescription } from "utils/functions";

const UVIndex: React.FC = (): React.ReactElement => {

    const { current: { uvi } } = useAppSelector(state => state.oneCall)
    
    return (
        <Container>
            <Title>УФ-индекс</Title>
            <Value>{uvi}</Value>
            <Description>{getUviDescription(uvi)}</Description>
            <Input
                pollution
                readOnly={true}
                type="range"
                min="0"
                max="13"
                value={uvi}>
            </Input>
        </Container>
    );
}

export default UVIndex