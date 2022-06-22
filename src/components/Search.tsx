import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCityWeather } from "redux/actions";
import { Form, Input, Button } from "../styles/StyledSearch";

const Search: React.FC = () => {

  const dispatch = useDispatch()
  
  const [city, setCity] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(getCityWeather(city.trim()));
    setCity("");
  }

  return (
      <Form role="search" onSubmit={handleSubmit}>
        <Input
          type="search"
          value={city}
          placeholder="В каком городе?"
          onChange={handleChange}
          required
        />
        <Button type="submit"></Button>
      </Form>
  );
}

export default Search
