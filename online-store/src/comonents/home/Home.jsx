import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductInfo } from "../../redux/action/products/products";
import { pagination } from "../../redux/action/products/products";
import Loader from "../spinner/spinner";
import { Card, Button, Pagination } from "react-bootstrap";
import Product from "../pages/products/products";
import ControlledCarousel from "../slider/slider";
import PaginationProduct from "../Pagination/Home.pagination";

class Home extends Component {
  constructor(props) {
    // @ts-ignore
    super(props);
    console.log(props);
  }
  componentDidMount() {
    //this.props.pagination();
    this.props.ProductInfo();
    //this.props.pagination();
  }
  render() {
    if (this.props.loading) {
      return <Loader />;
    }
    if (!this.props.productdata) {
      return null;
    }
    // if (!this.props.pagination) {
    //   return null;
    // }

    return (
      <React.Fragment>
        <ControlledCarousel />
        <Product products={this.props.productdata} {...this.props} />
        <PaginationProduct />
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
