import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductInfo } from "../../redux/action/products/products";

class Home extends Component {
  constructor(props) {
    // @ts-ignore
    super(props);
  }
  componentDidMount() {
    this.props.ProductInfo();
  }
  render() {
    return (
      <div className="container">
        <h1>Welcome here</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps, { ProductInfo })(Home);
