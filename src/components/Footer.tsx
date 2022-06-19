import styled from "styled-components";

const StyledFooter: any = styled.footer`
  width: 425px;
  margin: auto 0 0 0;
  text-align: center;
`;

const Footer: React.FC = (): React.ReactElement => {
 return <StyledFooter>© 2022 Денис Шаманский</StyledFooter>
}

export default Footer