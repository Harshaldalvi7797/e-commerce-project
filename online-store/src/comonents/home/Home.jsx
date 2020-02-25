import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductInfo } from "../../redux/action/products/products";
import Loader from "../spinner/spinner";

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
      <div className="container">
        <h1>Welcome here</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    productdata: state.details.item,
    loading: state.details.loading
  };
  // return state;
};
export default connect(mapStateToProps, { ProductInfo })(Home);
