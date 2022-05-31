import React, { useState } from 'react';
import "../styles/Buttoncomponent.css"
import {useContext} from "react";
import { Storecontext } from '../pages/store';


function Buttoncomponent(props) {
    const {display,setDisplay}= useContext(Storecontext);

    
  return (
    <div className='Buttonmaincontainer'>
      <button disabled={display}>Buy Now</button>
      <h5 className="propsname">The flavour selected is :{props.name}</h5>
    </div>
  )
}

export default Buttoncomponent
