import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import  "../styles/home.css";
import Clock from "../components/Clock";

function Home() {
  return (
    <div className="offers">
      <Card className="card">
        <div className="imgclass">
          <CardImg src="img11.jpg" className="img" />
          <img src="img-text.jpg" className="box-image"></img>
          <h3 className="img-text">Scoops Smile</h3>
        </div>
        <CardBody>
          <CardTitle className="card-title">Summer Offer</CardTitle>
          <Clock></Clock>
          <CardText>
            <h2 className="card-text">
              On a hot summer day, nothing beats a refreshing scoop of your
              favorite ice cream.
            </h2>
          </CardText>
          <Button className="buy-now">Buy Now</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Home;
