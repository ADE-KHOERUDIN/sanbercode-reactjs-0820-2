import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css";
import Form from "./form";
import Table from "./table";


const newInput = () => ({
  id: null,
  name: "",
  price: 0,
  weight: 0,
});

const DaftarBuah = () => {
  const [dataBuah, setdataBuah] = useState(null);
  const [input, setInput] = useState(newInput());

  useEffect(() => {
    const url = "http://backendexample.sanbercloud.com/api/fruits";

    if (dataBuah === null) {
      axios
        .get(url)
        .then((response) => setdataBuah(response.data))
        .catch((err) => console.log(err));
    }
  }, [dataBuah]);

  const handleChange = (prop, value) =>
    setInput({
      ...input,
      [prop]: prop === "name" ? value : parseInt(value),
    });

  const handleEdit = (buah) => {
    const { created_at, updated_at, ...input } = buah;

    setInput(input);
  };

  const handleAdd = () => {
    const url = "http://backendexample.sanbercloud.com/api/fruits";
    const { id, ...data } = input;

    axios
      .post(url, data)
      .then((response) => {
        setdataBuah((prevState) => [...prevState, response.data]);
        setInput(newInput());
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = () => {
    const url = `http://backendexample.sanbercloud.com/api/fruits/${input.id}`;
    const { id, ...data } = input;

    axios
      .put(url, data)
      .then((response) => {
        const updatedState = dataBuah.map((buah) => {
          if (buah.id === response.data.id) {
            return response.data;
          }

          return buah;
        });

        setdataBuah(updatedState);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    const url = `http://backendexample.sanbercloud.com/api/fruits/${id}`;

    axios
      .delete(url)
      .then(() => {
        setdataBuah(dataBuah.filter((buah) => buah.id !== id));
        setInput(newInput());
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    if (input.id) {
      handleUpdate();
    } else {
      handleAdd();
    }
  };

  return (
    <>
      <Table dataBuah={dataBuah} onEdit={handleEdit} onDelete={handleDelete} />

      <Form buah={input} onChange={handleChange} onSubmit={handleSubmit} />
    </>
  );
};
  
export default DaftarBuah