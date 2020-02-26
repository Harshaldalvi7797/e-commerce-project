import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductInfo } from "../../redux/action/products/products";
import Loader from "../spinner/spinner";
import { Card, Button } from "react-bootstrap";
import Product from "../pages/products/products";

class Home extends Component {
  constructor(props) {
    // @ts-ignore
    super(props);
  }
  componentDidMount() {
    this.props.ProductInfo();
  }
  render() {
    if (this.props.loading) {
      return <Loader />;
    }
    if (!this.props.productdata) {
      return null;
    }

    return (
      <React.Fragment>
        <Product products={this.props.productdata} {...this.props} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    // productdata: state.details.item
    productdata: state.details.item,
    loading: state.details.loading
  };
  // return state;
};
export default connect(mapStateToProps, { ProductInfo })(Home);
