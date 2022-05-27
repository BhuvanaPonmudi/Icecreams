import React from "react";
import IData from "../../src/images.json";
import { Carousel } from "react-bootstrap";
import  "../styles/BootstrapCarousel.css";
import { Button } from "reactstrap";
import Login from "./Login";
import { Context } from "../App";
import {useContext} from "react";


function BootstrapCarousel() {
const val = useContext(Context);
console.log(val);
  return (

    <div className="flavours">
       <h2 className="context">{val}</h2>
  
      <Carousel>
        {IData &&
          IData.map((record) => (
            <Carousel.Item key={record.id}>
              <img className="d-block w-100" src={record.icon} />
              <Carousel.Caption>{record.caption}</Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}

export default BootstrapCarousel;
