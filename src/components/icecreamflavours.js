import React from 'react'
import {Label} from "reactstrap";
import "../styles/icecreamflavours.css"

function Icecreamflavours(props) {
    let { setFlavour } = props;
  
  return (
    <div className='flavoursmaincontainer'>
      <p> Flavours </p>
          <div className="checkandflavours">
           <input type="radio" name="color" value="Vanilla" onClick={() => setFlavour("Vanilla")}/>
                <Label>Vanilla</Label></div>
       <div className="checkandflavours">
           <input type="radio" name="color" value="Strawberry" onClick={() => setFlavour("Strawberry")}/>
               <Label>Strawberry</Label></div>
       <div className="checkandflavours">
           <input type="radio" name="color" value="BlackCurrent" onClick={() => setFlavour("BlackCurrent")}/>
                <Label>BlackCurrent</Label></div>
       <div className="checkandflavours">
           <input type="radio" name="color" value="Pista" onClick={() => setFlavour("Pista")}/>
                <Label>Pista</Label></div>
       <div className="checkandflavours">
            <input type="radio" name="color" value="Chocolate" onClick={() => setFlavour("Chocolate")}/>
             <Label>Chocolate</Label></div>
       <div className="checkandflavours"> 
              <input type="radio" name="color" value="Butterscotch" onClick={() => setFlavour("ButterScotch")}/>
              <Label>ButterScotch</Label></div>
    </div>
  )
}

export default Icecreamflavours;
