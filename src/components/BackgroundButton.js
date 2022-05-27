import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Label } from "reactstrap";
import  "../styles/BackgroundButton.css";

function BackgroundButton(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let { setColor } = props;

  return (
    <div>
      <Button onClick={handleShow}>Click here</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header></Modal.Header>
        <Modal.Body>Change the Background Colour of the Page</Modal.Body>
        <Modal.Footer>
          <div className="align-left">
            <p>
              <input
                type="radio"
                name="color"
                value="red"
                onClick={() => setColor("#ff0000")}
              />
              <Label style={{ backgroundColor: "red" }}>RED</Label>
            </p>
            <p>
              <input
                type="radio"
                name="color"
                value="green"
                onClick={() => setColor("#00ff00")}
              />
              <Label style={{ backgroundColor: "green" }}>GREEN</Label>
            </p>
            <p>
              <input
                type="radio"
                name="color"
                value="blue"
                onClick={() => setColor("#0000ff")}
              />
              <Label style={{ backgroundColor: "blue" }}>BLUE</Label>
            </p>
          </div>
          <p className="Submitbtn">
            <Button onClick={handleClose}>Close</Button>
          </p>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BackgroundButton;
