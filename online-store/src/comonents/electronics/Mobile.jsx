import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductByCategory } from "../../redux/action/products/products";

class Mobile extends Component {
  constructor(props) {
    super(props);
    console.log(props.match);
  }
  componentDidMount() {
    this.props.fetchProductByCategory(this.props.match.params.name);
  }
  render() {
    return <div>fgfg</div>;
  }
}
const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps, { fetchProductByCategory })(Mobile);
