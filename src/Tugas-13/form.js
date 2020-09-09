import React from "react";

const Form = ({ buah, onChange, onSubmit }) => {
  const { name, price, weight } = buah;

  const handleChange = (e) => {
    onChange(e.currentTarget.name, e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <div>
      <h1>Form Data Buah</h1>

      <form onSubmit={handleSubmit}>
      <table>
        <tr>
            <td>
            <label htmlFor="name">
                <b>Nama</b>
            </label>
            </td>
            <td>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
            />
            </td>
        </tr>
        <tr>
            <td>
              <label htmlFor="price">
                <b>Harga</b>
            </label>
            </td>
            <td>
            <input
                type="number"
                name="price"
                id="price"
                value={price}
                onChange={handleChange}
            />
            </td>
        </tr>

        <tr>
            <td>
            <label htmlFor="weight">
                <b>Berat (gr)</b>
            </label>
            </td>
            <td>
            <input
                type="number"
                name="weight"
                id="weight"
                value={weight}
                onChange={handleChange}
            />
            </td>
        </tr>

        <tr>
          <th>
          <button type="submit">submit</button>
          </th>
          <th>
         
          </th>
        </tr>
        </table>
      </form>
    </div>
  );
};

export default Form;