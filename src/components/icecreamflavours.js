import React ,{useState,useContext} from 'react'
import {Label} from "reactstrap";
import "../styles/icecreamflavours.css";
import { Storecontext } from '../pages/store';


function Icecreamflavours(props) {
    let { setFlavour } = props;
    const {color,setColor} = useContext(Storecontext);
    const receivedData = [{flavour:"Vanilla",color:"blue" ,id:"f1"}, 
                          {flavour:"Strawberry",color:"red" ,id:"f2" }, 
                          {flavour:"Blackcurrent",color:"orange" ,id:"f3" },
                          {flavour:"Pista",color:"green",id:"f4" },
                          {flavour:"Chocolate",color:"yellow",id:"f5" },
                          {flavour:"Butterscotch",color:"pink",id:"f6" }];

return(
     <div className="flavoursmaincontainer">
           <p className="flavoursheader">Flavours</p>
           {receivedData?.map((data, index) => (
           <div className="checkandflavours" style={{backgroundColor : color===data.color?color:""}}>
           <input type="radio" name="radio" value={data.color} id ={data.id} onClick={e => {setFlavour(data.flavour);setColor(e.target.value)}}/>
            <Label for={data.id}>{data.flavour}</Label></div>
          ))}
     </div>
)
}
export default Icecreamflavours;