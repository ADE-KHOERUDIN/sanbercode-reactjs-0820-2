import React from "react"
import {BuahProvider} from "./BuahContext"
import BuahList from "./BuahList"
import BuahForm from "./BuahForm"
import "./style.css"

const Buah = () =>{
  return(
    <BuahProvider>
      <div>
        <BuahList/>
        <br/>
        <br/>
        <BuahForm/>
      </div>
    </BuahProvider>
  )
}

export default Buah