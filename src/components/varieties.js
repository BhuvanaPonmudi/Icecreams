import React,{useState} from 'react';
import {useContext} from "react";
import {Label} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/varieties.css"
import { Storecontext } from '../pages/store';


function Varieties() {

    const {display,setDisplay}= useContext(Storecontext);
  
    let checkedCount = 0;

    const handleChange = event => {

        if (event.target.checked) {
         checkedCount++;
         if (checkedCount>0){
             setDisplay(false);
         }
          
        }
        else{
            checkedCount--;
            if (checkedCount<0){
                setDisplay(true);
            }
            
        }
       
    }

  
  return (
    <div className="varietiesmaincontainer">
        <p>Check the Varieties Below</p>
       <div className="checkandvalue"><input type="checkbox" name="cakes" value="cakes" onChange={handleChange}/>
       <Label>Icecream Cakes</Label></div>
       <div className="checkandvalue"><input type="checkbox" name="scoops" value="scoops" onChange={handleChange}/>
       <Label>Icecream Scoops</Label></div>
       <div className="checkandvalue"><input type="checkbox" name="bars" value="bars" onChange={handleChange}/>
       <Label>Icecream Bars</Label></div>
       <div className="checkandvalue"><input type="checkbox" name="sticks" value="sticks" onChange={handleChange}/>
       <Label>Icecream Sticks</Label></div>
       <div className="checkandvalue"><input type="checkbox" name="cones" value="cones" onChange={handleChange}/>
       <Label>Icecream Cones</Label></div>
       <div className="checkandvalue"> <input type="checkbox" name="pizzas" value="pizzas" onChange={handleChange}/>
       <Label>Icecream pizzas</Label></div>
     </div>
  )
}

export default Varieties;
