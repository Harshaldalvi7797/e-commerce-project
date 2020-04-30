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
          <div className="col-md-4">
            hhg
            {/* <h1>{this.props.product.item.data.d.name}</h1> */}
            {this.props.product.item.data.map(item => (
              <div className="col-md-4">
                <Card style={{ width: "18rem", paddingLeft: "25px" }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title> {item.name}</Card.Title>
                    <Card.Text>Price {item.price}</Card.Text>
                    <Card.Text>Offer Price {item.offerPrice}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return { product: state.fetchproductsByCategory };
};
export default connect(mapStateToProps, { fetchProductByCategory })(Mobile);
