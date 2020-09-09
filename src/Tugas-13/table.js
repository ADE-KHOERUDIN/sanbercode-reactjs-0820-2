import React from "react";

// ---------------------------------------------- the component
const Table = ({ dataBuah, onEdit, onDelete }) => (
  <div>
    <h1>Tabel Harga Buah</h1>
    <table>
      <thead>
        <tr>
          <th>Nama</th>

          <th>Harga</th>

          <th>Berat</th>

          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        {dataBuah
          ? dataBuah.map((buah) => (
              <tr key={buah.id}>
                <td>{buah.name}</td>

                <td>{buah.price}</td>

                <td>{buah.weight / 1000} kg</td>

                <td id="actions">
                  <button onClick={() => onEdit(buah)}>edit</button>

                  <button onClick={() => onDelete(buah.id)}>delete</button>
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  </div>
);

export default Table;
