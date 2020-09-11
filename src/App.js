import React from 'react';
import Routers from './Tugas-15/Routers';
import { ThemeContextProvider } from './Tugas-15/TemaContext'
import "./public/style.css";
import "./Tugas-15/Pencet"
import Pencet from './Tugas-15/Pencet';

function App() {
  return (
    <div>
      {/*  <FormPembelian />
     <HargaBuah />
      <Timer countdown='101'/>
    <ListHargaBuah />  */}
    <ThemeContextProvider>
	  <Routers />
    <Pencet />
    </ThemeContextProvider>
    </div>
  );
}

export default App;