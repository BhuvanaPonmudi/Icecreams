import React,{useState} from 'react';
import {useContext} from "react";
import {Label} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/varieties.css"
import { Storecontext } from '../pages/store';


function Varieties() {
  let checkedCount = 0;
  const receivedData = [{ value: "Cakes" ,id :"v1"}, { value: "Scoops",id:"v2" }, { value: "Bars",id:"v3" },{value :"Sticks",id:"v4"},{value :"Cones",id:"v5"},{value :"Pizzas",id:"v6"}];
  const [checkedState, setCheckedState] = useState(new Array(receivedData.length).fill(false));
  const {color,setDisplay,display}= useContext(Storecontext);

  const handleOnChange = (position) => {
  const updatedCheckedState = checkedState.map((item, index) =>
    index === position ? !item : item
  );
  setCheckedState(updatedCheckedState);

   if (updatedCheckedState.includes(true)) {             
      checkedCount++;

     if (checkedCount>0){
       setDisplay(false);
     }}
  else{
  if (checkedCount<=0){
      setDisplay(true);
    
  }
  
}

  }
  return (
    <div className="varietiesmaincontainer">
    <p className='varietiesheader'>Varieties</p>
    {receivedData?.map((data, index) => (
      <div className="checkandvalue" style={{backgroundColor :checkedState[index]===true?color:""}}>
      <input type="checkbox" value={data.value} id={data.id} checked={checkedState[index]}
                    onChange={() =>handleOnChange(index)}/>
          <Label for ={data.id}>Icecream {data.value}</Label></div>
    ))}

     </div>
  )}
 



export default Varieties;
