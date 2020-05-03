import React from "react";
import { Card, Button } from "react-bootstrap";

const Posts = ({ allenquries, loading, props }) => {
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="row">
      {allenquries.map(post => (
        // <li key={post.id} className="list-group-item">
        //   <ul>{post.name}</ul>
        //   <ul>{post.email}</ul>
        // </li>
        <div className="col-md-4">
          <Card style={{ width: "18rem", paddingLeft: "25px" }}>
            <Card.Img variant="top" src={post.image} />
            <Card.Body>
              <Card.Title> {post.name}</Card.Title>
              <Card.Text>Price {post.price}</Card.Text>
              <Card.Text>Offer Price {post.offerPrice}</Card.Text>
              <Button
                variant="primary"
                onClick={() => props.history.push(`/product/${post._id}`)}
              >
                Details
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Posts;
