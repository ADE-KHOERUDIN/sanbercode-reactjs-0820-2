import React, { useContext } from 'react'
import { ThemeContext } from './TemaContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FormPembelian from '../Tugas-9/FormPembelian';
import HargaBuah from '../Tugas-10/HargaBuah';
import Timer from '../Tugas-11/Timer';
import ListHargaBuah from '../Tugas-12/ListHargaBuah';
import DataBuah from '../Tugas-13/DataBuah';
import Buah from '../Tugas-14/Buah';
import Logo from '../public/logo.png';

export default function App() {
    const state = useContext(ThemeContext)
  
    const appBar = {
      backgroundColor: state.theme.primary,
      color: state.theme.text
    }

  return (
    <Router>
      <div>
        <header style={appBar}>
        <Link to="/">
        <img src={Logo} alt='website logo' style={{width: "200px"}} />
        </Link>
        <nav>
          <ul>
           <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form-pembelian">Tugas-9</Link>
            </li>
            <li>
              <Link to="/harga-buah">Tugas-10</Link>
            </li>
            <li>
              <Link to="/timer">Tugas-11</Link>
            </li>
            <li>
              <Link to="/list-harga-buah">Tugas-12</Link>
            </li>
            <li>
              <Link to="/data-buah">Tugas-13</Link>
            </li>
            <li>
              <Link to="/buah-with-context">Tugas-14</Link>
            </li>
          </ul>
        </nav>
        </header>
    

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <section>
        <Switch>
          <Route exact path="/">
              <h1>Halo Dunia</h1>
              <p>Ini adalah halaman pertama tugas bootcamp</p>
              <p>Saya senang belajar ReactJS di SanberCode</p>
          </Route>
          <Route path="/form-pembelian" component={FormPembelian}>
            <FormPembelian />
          </Route>         
          <Route path="/harga-buah">
            <HargaBuah />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route path="/list-harga-buah">
            <ListHargaBuah />
          </Route>
          <Route path="/data-buah">
            <DataBuah />
          </Route>
          <Route path="/buah-with-context">
            <Buah />
          </Route>
         </Switch>
         </section>
      </div>
    </Router>
  );
}