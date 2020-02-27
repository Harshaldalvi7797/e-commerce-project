import React, { Component } from "react";
import { connect } from "react-redux";
// import { AddToCart } from "../../redux/action/products/products";
class Cart extends Component {
  render() {
    return (
      <div className="container">
        <h1>hello</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return state;
};
// export default connect(mapStateToProps, { AddToCart })(Cart);
export default Cart;
