import React from "react";
import { Container } from "styles/StyledSectionTwo";
import Weather from "./Weather";
import Footer from "./Footer";
import Search from "./Search";
import LoaderSectionTwo from "./Loader/LoaderSectionTwo";
import { useAppSelector } from "redux/hooks/useTypedSelector";

const SectionTwo: React.FC = () => {

  const { loading } = useAppSelector((state => state.loading))
  
  return (
    loading ? 

    <LoaderSectionTwo/> : 

    <Container>
      <Search/>
      <Weather/>
      <Footer/>
    </Container>
  );
}

export default SectionTwo;