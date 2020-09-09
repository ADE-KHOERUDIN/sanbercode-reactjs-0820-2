import React from 'react';
import FormPembelian from  './Tugas-9/FormPembelian';
import HargaBuah from './Tugas-10/HargaBuah';
import Timer from './Tugas-11/Timer';

function App() {
  return (
    <div>
      <FormPembelian />
      <HargaBuah />
      <Timer countdown='101'/>
	  <ListHargaBuah />
    </div>
  );
}

export default App;