import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchProductByCategory } from "../../redux/action/products/products";

class Mobile extends Component {
  constructor(props) {
    super(props);
    console.log(props.match);
    console.log(props);
  }
  componentDidMount() {
    this.props.fetchProductByCategory(this.props.match.params.name);
  }

  render() {
    if (!this.props.product) {
      return null;
    }
    return (
      <div className="container">
        <div className="row">
          hhg
          {this.props.product.data.d.map(item => (
            <div className="col-md-3">
              <Card style={{ width: "18rem", paddingLeft: "25px" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title> {item.name}</Card.Title>
                  <Card.Text>Price {item.price}</Card.Text>
                  <Card.Text>Offer Price {item.offerPrice}</Card.Text>
                  {/* <Button variant="primary">Details</Button> */}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return { product: state.fetchproductsByCategory.item };
};
export default connect(mapStateToProps, { fetchProductByCategory })(Mobile);
