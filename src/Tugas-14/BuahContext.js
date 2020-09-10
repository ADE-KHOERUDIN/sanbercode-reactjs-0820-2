import React, { useState, createContext, useEffect } from "react";
import axios from 'axios';
export const BuahContext = createContext();

export const BuahProvider = props => {
  const [buah, setBuah] = useState(null); 
  const [inputForm, setInputForm] = useState({
    id: null,
    name: "",
    price: 0,
    weight: 0,
  });
  
  useEffect(() => {
    const url = "http://backendexample.sanbercloud.com/api/fruits";

    if (buah === null) {
      axios
        .get(url)
        .then((response) => setBuah(response.data))
        .catch((err) => console.log(err));
    }
  }, [buah]);

  return (
    <BuahContext.Provider value={[buah, setBuah, inputForm, setInputForm]}>
      {props.children}
    </BuahContext.Provider>
  );
};