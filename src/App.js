import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '10px',  border: '1px solid', width: '50%', margin: '10% 25%',  }}>
      <div style={{ width: '50%', }}>
        <h2 style={{ textAlign: 'center', }}>Form Pembelian Buah</h2>
        <table style={{ border: 0, width: '100%', }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: 'bold', }}>Nama Pelanggan</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold', position: 'absolute',}}>Daftar Items</td>
              <td>
                <input type="checkbox" />
                Semangka 
                <br />
                <input type="checkbox" />
                Jeruk 
                <br />
                <input type="checkbox" />
                Nanas 
                <br />
                <input type="checkbox" />
                Salak 
                <br />
                <input type="checkbox" />
                Anggur 
                <br />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="button" style={{ height: '29px', borderRadius: '10px',}}>Kirim</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
  }
  
  export default App;
