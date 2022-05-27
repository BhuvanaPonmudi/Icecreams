import React from 'react'
import {useEffect,useState} from "react";
import "../styles/store.css";
import BackgroundButton from "../components/BackgroundButton";
import axios from 'axios';


function Stores() {
  const [data,setData]=useState([]);
  const [searchTerm,setSearchTerm] = useState('')
  const [color, setColor] = useState("#B2BABB");


 
   const fetchApi=()=> {
    axios.get('data.json').then(response => response.data).then(
      (result) => {
          setData(result)
      },
      (error) => {
          setData(null);
      }
    )   
    }
    

    /*const fetchApi =()=>{
      fetch("data.json")
      .then(res => res.json())
      .then(res => setData(res))
    }*/


    useEffect(() => {
      fetchApi();
    });


    
    const DisplayData = data.filter((info) => {
      if(searchTerm === ""){
        return info;
      }
      else if(info.city.toLowerCase().includes(searchTerm.toLowerCase())){
        return info;
      }
    }).map((info,key)=>{
      return (
        <tr>
          <td>{info.id}</td>
          <td>{info.doorno}</td>
          <td>{info.address}</td>
          <td>{info.city}</td>
        </tr>
      );
    });

  return(
    <div className="home1" style={{ backgroundColor: color }}>
   <div className="bckplace">
        <BackgroundButton setColor={setColor} />
      </div>
  
    <h1 class="text">Stores Near your Location</h1>
  <div className="searchOption">
    <input type="text" placeholder="search" onChange={e=>setSearchTerm(e.target.value) }/></div>
    <table class="center">
      <thead>
        <tr>
          <th>S.NO</th>
          <th>Doornum</th>
          <th>Address</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>{DisplayData}</tbody>
    </table>
  </div>
  )


}

export default Stores;