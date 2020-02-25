import React from "react";
import { Card, Button } from "react-bootstrap";
const Product = props => {
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        {props.products.d.map(item => (
          <div className="col-md-3">
            <Card style={{ width: "18rem", paddingLeft: "25px" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;
