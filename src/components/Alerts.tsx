import React from "react";
import { useState } from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import {
  StyledAlerts,
  Header,
  Content,
  Item,
  Description,
  Event,
  Text,
  BoxShadow,
} from "../styles/StyledAlerts";

const Alerts: React.FC = (): React.ReactElement => {

  const [open, setOpen] = useState(false);
  
  const data = useAppSelector(state => state.oneCall.alerts)

  const handleData = (data: any) =>
    data[0].sender_name
    ?
    data
    :
    data.filter((alerts: any) => /[а-я]/i.test(alerts.event))

  return (
    <StyledAlerts onClick={() => setOpen(!open)}>
      <Header open={open}>
        {data[0].sender_name ? data[0].sender_name : "Росгидромет предупреждает:"}
      </Header>

      <Content open={open}>
        {handleData(data).map(
          ({ description, event }: any, index: React.Key | null | undefined) => {
            return (
              <Item key={index}>
                <Description>
                  <Event>{event}.</Event>
                  <Text>
                    {description[0].toUpperCase() + description.slice(1)}
                  </Text>
                </Description>
              </Item>
            );
          }
        )}

      </Content>
      <BoxShadow/>
    </StyledAlerts>
  );
}

export default Alerts