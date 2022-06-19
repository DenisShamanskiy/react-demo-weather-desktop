import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCityWeather } from "redux/actions";
import { StyledSearch, Input, Button } from "../styles/StyledSearch1280";

const Search1280: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch()
  
  const [city, setCity] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(getCityWeather(city.trim()));
    // props.getCityWeather(city.trim())
    setCity("");
  }

  // console.log("Search");

  return (
    <>
      <StyledSearch role="search" onSubmit={handleSubmit}>
        <Input
          type="search"
          value={city}
          placeholder="В каком городе?"
          onChange={handleChange}
          required
        />
        <Button type="submit"></Button>
      </StyledSearch>
    </>
  );
}

export default Search1280
