import React, {useContext} from "react"
import axios from 'axios';
import {BuahContext} from "./BuahContext"

const BuahForm = () =>{
  const [buah, setBuah, inputForm, setInputForm] = useContext(BuahContext)

 const handleSubmit = (event) =>{
    event.preventDefault()
        if (inputForm.id === null){
           axios.post(`http://backendexample.sanbercloud.com/api/fruits`, { name: inputForm.name, price: inputForm.price, weight:inputForm.weight})
          .then(res => {
            var data = res.data
            setBuah([...buah, {id: data.id, name: data.name, price: data.price, weight: data.weight}])
            setInputForm({id: null, name: "", price: 0, weight: 0})
          })
          }else{
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${inputForm.id}`, { name: inputForm.name, price: inputForm.price, weight:inputForm.weight})
            .then(res => {
              var newDataBuah = buah.map(x => {
                if (x.id === inputForm.id){
                  x.name = inputForm.name
                  x.price = inputForm.price
                  x.weight = inputForm.weight
                }
                return x
              })
              setBuah(newDataBuah)
              setInputForm({id: null, name: "", price: 0, weight:0})
            })
        }
    }    
    


  const handleChangeName = (event) =>{
    setInputForm({...inputForm, name: event.target.value})
  }
  
  const handleChangeHarga = (event) =>{
    setInputForm({...inputForm, price: event.target.value})
  }

  const handleChangeBerat = (event) =>{
    setInputForm({...inputForm, weight: event.target.value})
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
      <table>
        <tr>
            <td>
            <label htmlFor="name">
                <b>Nama</b>
            </label>
            </td>
            <td>
            <input type="text" value={inputForm.name} onChange={handleChangeName} />
            </td>
        </tr>
        <tr>
            <td>
              <label htmlFor="price">
                <b>Harga</b>
            </label>
            </td>
            <td>
            <input type="number" value={inputForm.price} onChange={handleChangeHarga} />
            </td>
        </tr>

        <tr>
            <td>
            <label htmlFor="weight">
                <b>Berat (gr)</b>
            </label>
            </td>
            <td>
            <input type="number" value={inputForm.weight} onChange={handleChangeBerat} />
            </td>
        </tr>

        <tr>
          <th>
          
          </th>
          <th>
          <button style={{borderRadius: "10px", marginRight: "66%"}}>submit</button>
          </th>
        </tr>
        </table>
      </form>
    </>
  )

}

export default BuahForm