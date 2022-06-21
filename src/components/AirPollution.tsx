import { useAppSelector } from "redux/hooks/useTypedSelector";
import {
  Container,
  Title,
  Wrapper,
  Description,
  List,
  Item,
  ChemicalFormula,
  Value,
} from "../styles/StyledAirPollution";
import { Input } from "../styles/StyledCurrentDetailed";
import { getDescriptionCAQI } from "utils/functions";

const AirPollution: React.FC = (): React.ReactElement => {

  const { components, main: { aqi } } = useAppSelector(state => state.airPollution)
  const error = useAppSelector(state => state.errors.errorAirPollution)

  const arrayChemicalFormula: JSX.Element[] = [
    <ChemicalFormula>CO</ChemicalFormula>,
    <ChemicalFormula>
      NH<sub>3</sub>
    </ChemicalFormula>,
    <ChemicalFormula>NO</ChemicalFormula>,
    <ChemicalFormula>
      NO<sub>2</sub>
    </ChemicalFormula>,
    <ChemicalFormula>
      O<sub>3</sub>
    </ChemicalFormula>,
    <ChemicalFormula>
      PM<sub>2.5</sub>
    </ChemicalFormula>,
    <ChemicalFormula>
      M<sub>10</sub>
    </ChemicalFormula>,
    <ChemicalFormula>
      SO<sub>2</sub>
    </ChemicalFormula>,
  ];

  const setValue = (num: number) => error ? "Нет данных" : <span>{num}</span>



  return (
   <Container>
      <Title>Загрязнение воздуха</Title>
      
      <Wrapper>
        <Description>{getDescriptionCAQI(aqi)}</Description>
        <Input
          pollution
          readOnly={true}
          type="range"
          min="1"
          max="5"
          value={aqi}>
        </Input>
      </Wrapper>
    
      <List>
        {Object.values(components).map((value, index) => {
          return (
            <Item key={index}>
              <Value>
                {setValue(value)}
              </Value>
              {arrayChemicalFormula[index]}
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

export default AirPollution