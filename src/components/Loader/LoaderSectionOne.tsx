import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`
   0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const shimmerEffect = css`
    border-radius: var(--br-loader);
    animation: ${shimmer} 3s infinite linear;
    background: linear-gradient(to right, #d5dae7 5%, var(--Lotion) 25%, #d5dae7 35%);
    background-size: 1000px 100%;
`;
const LoaderContainer = styled.div`
    width: 900px;
    height: 900px; 
    padding: 30px;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    background-color: var(--Bright-Gray);
`;
const ClockLocal = styled.div`
    grid-column: 1 / 4;
    grid-row: 1 / 3;
    margin: 0 auto auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const LocalTime = styled.div`
    width: 132.41px;
    height: 57.5px;
    margin: 0 auto 25px 0;
    ${shimmerEffect}
`;
const CurrentDate = styled.div`
    width: 277.31px;
    height: 23px;
    margin: 0 auto 25px 0;
    ${shimmerEffect}
`;
const Greeting = styled.div`
    width: 248.91px;
    height: 40.25px;
    margin: 0 auto 0 0;
    ${shimmerEffect}
`;
const Daily = styled.div`
    grid-column: 1 / 9;
    grid-row: 3 / 5;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(8,1fr);
    gap: 10px;
`;
const DailyItem = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    background-color: #ecf2f9;
    border-radius: var(--br-20);
`;
const DailyIcon = styled.div`
    width: 66.25px;
    min-height: 66.25px;
    margin-bottom: 20px;
    border-radius: var(--br-20);
    ${shimmerEffect}
`;
const DailyDay = styled.div`
    width: 100%;
    min-height: 18.4px;
    ${shimmerEffect}
`;
const DailyTemperature = styled.div`
  width: 40px;
  height: 40px;
  margin: auto;
  ${shimmerEffect}
`;
const AirPollution = styled.div`
    grid-column: 1 / 7;
    grid-row: 5 / 7;
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ecf2f9;
    border-radius: var(--br-20);
`;
const Title = styled.div`
    width: 231.117px;
    height: 22.08px;
    margin: 0 auto 0 0;
    ${shimmerEffect}
`;
const WrapperAirPollution = styled.div`
    width: 100%;
    height: 25.297px;
    display: flex;
`;
const Description = styled.div`
    width: 125.63px;
    height: 100%;
    ${shimmerEffect}
`;
const Input = styled.div`
    width: 164.2px;
    height: 11px;
    margin: 0.5rem 0 0 auto;
    ${shimmerEffect}
`;
const List = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
`;
const AirPollutionItem = styled.div`
    width: 100%;
    height: 85px;
    margin-right: 15px;
    border-radius: 15px;
    ${shimmerEffect}
    &:last-child {
    margin: 0
  }
`;
const Precipitation = styled.div`
    grid-column: 7 / 9;
    grid-row: 5 / 7;
    margin: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    background-color: #ecf2f9;
    border-radius: var(--br-20);
`;
const PrecipitationTitle = styled.div`
    width: 80%;
    height: 25.3px;
    margin: 0 0 15px 0;
    ${shimmerEffect}
`;
const PrecipitationValue = styled.div`
    width: 55%;
    height: 51.75px;
    display: flex;
    ${shimmerEffect}
`;
const PrecipitationTextRight = styled.div`
    width: 80%;
    height: 18.4px;
    margin: auto 0 0 auto;
    ${shimmerEffect}
`;
const SunriseAndSunset = styled.div`
    grid-column: 1 / 4;
    grid-row: 7 / 9;
    margin: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    background-color: #ecf2f9;
    border-radius: var(--br-20);
`;
const SunriseAndSunsetTitle = styled(PrecipitationTitle)`
    width: 60%;
    ${shimmerEffect}
`;
const SunriseAndSunsetDescription = styled.div`
    width: 100%;
    height: 132.2px;
    ${shimmerEffect}
    border-radius: 25px;
`;
const UVIndex = styled.div`
    grid-column: 4 / 6;
    grid-row: 7 / 9;
    margin: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    background-color: #ecf2f9;
    border-radius: var(--br-20);
`;
const UVIndexTitle = styled(PrecipitationTitle)`
    width: 60%;
    ${shimmerEffect}
`;
const UVIndexValue = styled(PrecipitationValue)`
    width: 25%;
    height: 51.75px;
    ${shimmerEffect}
`;
const UVIndexDescription = styled.div`
    width: 71.89px;
    height: 23px;
    margin: auto 0 0 auto;
    ${shimmerEffect}
`;
const UVIndexInput = styled.div`
    width: 164.2px;
    height: 11px;
    margin: 0.5rem 0 0 auto;
    ${shimmerEffect}
`;
const Wind = styled.div`
    grid-column: 6 / 9;
    grid-row: 7 / 9;
    margin: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    background-color: #ecf2f9;
    border-radius: var(--br-20);
`;
const WindTitle = styled(PrecipitationTitle)`
    width: 35%;
    ${shimmerEffect}
`;
const WindDescription = styled.div`
    width: 100%;
    height: 132.2px;
    ${shimmerEffect}
    border-radius: 25px;
`;

export default function LoaderSectionOne() {
  return (
    <LoaderContainer>
        <ClockLocal>
            <LocalTime/>
            <CurrentDate/>
            <Greeting/>
        </ClockLocal>
        <Daily>
            <DailyItem>
                <DailyIcon/>
                <DailyDay/>
                <DailyTemperature/>
            </DailyItem>
            <DailyItem>
                <DailyIcon/>
                <DailyDay/>
                <DailyTemperature/>
            </DailyItem>
            <DailyItem>
                <DailyIcon/>
                <DailyDay/>
                <DailyTemperature/>
            </DailyItem>
            <DailyItem>
                <DailyIcon/>
                <DailyDay/>
                <DailyTemperature/>
            </DailyItem>
            <DailyItem>
                <DailyIcon/>
                <DailyDay/>
                <DailyTemperature/>
            </DailyItem>
            <DailyItem>
                <DailyIcon/>
                <DailyDay/>
                <DailyTemperature/>
            </DailyItem>
            <DailyItem>
                <DailyIcon/>
                <DailyDay/>
                <DailyTemperature/>
            </DailyItem>
            <DailyItem>
                <DailyIcon/>
                <DailyDay/>
                <DailyTemperature/>
            </DailyItem>
        </Daily>
        <AirPollution>
            <Title/>
            <WrapperAirPollution>
                <Description/>
                <Input/>
            </WrapperAirPollution>
            <List>
                <AirPollutionItem/>
                <AirPollutionItem/>
                <AirPollutionItem/>
                <AirPollutionItem/>
                <AirPollutionItem/>
                <AirPollutionItem/>
                <AirPollutionItem/>
                <AirPollutionItem/>
            </List>
        </AirPollution>
        <Precipitation>
            <PrecipitationTitle/>
            <PrecipitationValue/>
            <PrecipitationTextRight/>
        </Precipitation>
        <SunriseAndSunset>
            <SunriseAndSunsetTitle/>
            <SunriseAndSunsetDescription/>
        </SunriseAndSunset>
        <UVIndex>
            <UVIndexTitle/>
            <UVIndexValue/>
            <UVIndexDescription/>
            <UVIndexInput/>
        </UVIndex>
        <Wind>
            <WindTitle/>
            <WindDescription/>
        </Wind>
    </LoaderContainer>
  );
}
