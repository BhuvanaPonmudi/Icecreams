import React, { useState } from 'react'
import '../styles/store.css';
import Varieties from '../components/varieties';
import Icecreamflavours from '../components/icecreamflavours';
import Buttoncomponent from '../components/Buttoncomponent';
import {createContext} from "react";


export const Storecontext = createContext();

function Stores() {
const [display,setDisplay] = useState(true);
const [flavour,setFlavour] = useState("");
const [color,setColor] = useState("");
 
  return (
    <div className='maincontainer'>
    
      <Storecontext.Provider value={{display,setDisplay,color,setColor}}>


      <div className="varieties">
       <Varieties/>
      </div>


      <div className="flavoursstore">
      <Icecreamflavours setFlavour ={setFlavour}/>
      </div>


      <div className="BuyNow">
       <Buttoncomponent name={flavour}/>
      </div>

      </Storecontext.Provider>
    
    </div>
  )
}

export default Stores;
