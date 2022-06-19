import { useDispatch } from "react-redux";
import {
    Overlay,
    Popup,
    Close,
    Warning,
    Text
  } from "styles/StyledCustomPopup";
import { useAppSelector} from "../redux/hooks/useTypedSelector";
import { POPUP_ALERT_HIDDEN } from "redux/constants";

const CustomPopup: React.FC = (): React.ReactElement => {  

const dispatch = useDispatch()

const show = useAppSelector(state => state.popupAlert)

  return (
    <Overlay show={show.popupAlert}> 
        <Popup show={show.popupAlert}>
            <Warning>Сервер не отвечает</Warning>
            <Text>Возможно необходимо использовать VPN</Text>
            <Close onClick={() => dispatch({type: POPUP_ALERT_HIDDEN})}>Хорошо</Close>
      </Popup>
    </Overlay>
  );
};

export default CustomPopup;