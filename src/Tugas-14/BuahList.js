import React, {useContext} from "react"
import axios from 'axios';
import {BuahContext} from "./BuahContext"

const BuahList = () =>{
  const [buah, setBuah, inputForm, setInputForm] = useContext(BuahContext)

  const handleDelete=(event)=>{
    var idBuah= parseInt(event.target.value) 
    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
    .then(res => {
      var newDataBuah = buah.filter(x=> x.id !== idBuah)
      setBuah(newDataBuah)
    })
  }

  const handleEdit=(event)=>{
    var idBuah= parseInt(event.target.value)
    var odading = buah.find(x=> x.id === idBuah)

    setInputForm({...inputForm, name: odading.name, price: odading.price, weight: odading.weight, id: idBuah})
  }

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Harga</th>
          <th>Berat</th>          
          <th>Action</th>
        </tr>        
      </thead>
      <tbody>
        {
            buah !== null && buah.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.weight / 1000} kg</td>

                        <td id="actions">
                        <button value={item.id} style={{marginRight: "10px"}} onClick={handleEdit}>Edit</button>
                        <button value={item.id} onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
      </tbody>
    </table>
  )
}

export default BuahList