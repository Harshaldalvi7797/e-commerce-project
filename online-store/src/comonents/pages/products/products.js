import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = props => {
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        {props.products.d.map(item => (
          <div className="col-md-4">
            <Card style={{ width: "18rem", paddingLeft: "25px" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title> {item.name}</Card.Title>
                <Card.Text>Price {item.price}</Card.Text>
                <Card.Text>Offer Price {item.offerPrice}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => props.history.push(`/product/${item._id}`)}
                >
                  Details
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;
