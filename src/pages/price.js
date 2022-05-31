import React, { useState } from 'react'
import { Table } from "reactstrap";


function Prices() {
   
    const data = [
          {
            name: 'Vanilla',
            flavours: 'Basic',
            half: 'Rs 65',
            perlitre: 'Rs 130', 
          },
          {
            name: 'Strawberry',
            flavours: 'Basic',
            half: 'Rs 65',
            perlitre: 'Rs 130', 
          },
          {
            name: 'Butterscotch',
            flavours: 'Basic',
            half: 'Rs 90',
            perlitre: 'Rs 160', 
          },
          {
            name: 'Kesar Pista',
            flavours: 'Basic',
            half: 'Rs 110',
            perlitre: 'Rs 185', 
          },
          {
            name: 'Chocolate',
            flavours: 'Chocolate',
            half: 'Rs 95',
            perlitre: 'Rs 160', 
          },
          {
            name: 'Belgium Dark Chocolate',
            flavours: 'Chocolate',
            half: 'Rs 135',
            perlitre: 'Rs 235', 
          },
          {
            name: 'Black Current',
            flavours: 'Exotics',
            half: 'Rs 125',
            perlitre: 'Rs 210', 
          },
          {
            name: 'Caramel Nuts',
            flavours: 'Exotics',
            half: 'Rs 135',
            perlitre: 'Rs 235', 
          },
          {
            name: 'Mango',
            flavours: 'Fruits',
            half: 'Rs 110',
            perlitre: 'Rs 200', 
          },
          {
            name: 'Litchee',
            flavours: 'Fruits',
            half: 'Rs 130',
            perlitre: 'Rs 230', 
          },
          {
            name: 'Honey Almond',
            flavours: 'Dry fruits',
            half: 'Rs 225',
            perlitre: 'Rs 330', 
          },
          {
            name: 'Badam',
            flavours: 'Dry Fruits',
            half: 'Rs 225',
            perlitre: 'Rs 330', 
          },
          {
            name: 'Kesar',
            flavours: 'Dry Fruits',
            half: 'Rs 210',
            perlitre: 'Rs 310', 
          },
          {
            name: 'Vanilla',
            flavours: 'Sugar-free',
            half: 'Rs 110',
            perlitre: 'Rs 230', 
          },
          {
            name: 'Strawberry',
            flavours: 'Sugar-free',
            half: 'Rs 135',
            perlitre: 'Rs 240', 
          },
          {
            name: 'ButterScotch',
            flavours: 'Sugar-free',
            half: 'Rs 135',
            perlitre: 'Rs 240', 
          },
          {
            name: 'Chocolate',
            flavours: 'Sugar-free',
            half: 'Rs 115',
            perlitre: 'Rs 230', 
          },
          {
            name: 'Kesar',
            flavours: 'Sugar-free',
            half: 'Rs 140',
            perlitre: 'Rs 250', 
          },
          {
            name: 'Blackforest',
            flavours: 'Exotics',
            half: 'Rs 230',
            perlitre: 'Rs 330', 
          },
          {
            name: 'Pista',
            flavours: 'Sugar-free',
            half: 'Rs 145',
            perlitre: 'Rs 330', 
          }

        ]
      
   const displayData =data.sort((a, b) => a.perlitre > b.perlitre ? 1 : -1) 
   .map(info=>{
        return (
          <tr>
            <td>{info.name}</td>
            <td>{info.flavours}</td>
            <td>{info.half}</td>
            <td>{info.perlitre}</td>
          </tr>
        );
     });
  
  return (
  <div>
    <Table striped bordered hover style={{color:"green"}}>
  
    <thead>
          <tr>
            <th>Name</th>
            <th>Flavours</th>
            <th>Price per half litre(500ml)</th>
            <th>Price per litre(1 L)</th>
          </tr>
        </thead>
          <tbody>
             {displayData}
          </tbody>
    </Table>
    </div>
  )
}

export default Prices;
