import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";
import { connect } from "react-redux";
import { AddProduct1 } from "../../redux/action/product/product";
import Navigation from "../Navigation";
class AddProduct extends Component {
  constructor(props) {
    super(props);
    // this.state = { apiResponse: "" };
    this.state = {
      product: "",
      category: "",
      price: "",
      decription: "",
      image: null,
      selectedFile: null
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    // this.onSubmitMethod = this.onSubmitMethod.bind(this);
    // this.onChange = this.onChange.bind(this);
  }
  setproduct = e => this.setState({ name: e.target.value });
  setcategory = e => this.setState({ category: e.target.value });
  setprice = e => this.setState({ price: e.target.value });
  // On submit
  onSubmitMethod = async e => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", this.state.image);
    data.append("product", this.state.product);

    this.props.AddProduct1(data);
  };

  render() {
    // value={this.state.name}
    // onChange={this.setproduct}
    return (
      <React.Fragment>
        <Navigation />{" "}
        <div className="container">
          <form onSubmit={this.onSubmitMethod}>
            <div className="row">
              <div className="col-md-3">
                <input
                  type="text"
                  name="product"
                  placeholder="Enter Product name"
                  value={this.state.product}
                  onChange={this.setproduct}
                />{" "}
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  name="category"
                  placeholder="Enter Product category"
                  value={this.state.category}
                  onChange={this.setcategory}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  name="product"
                  placeholder="Enter Product Price"
                  value={this.state.price}
                  onChange={this.setprice}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  name="product"
                  placeholder="Enter Product decription"
                />
              </div>
              <div className="col-md-3">
                {/* <input type="file" name="image" onChange={this.setimage} /> */}
                <input
                  type="file"
                  name="image"
                  onChange={this.img}
                  value={this.state.value}
                />
              </div>
              <div className="col-md-3">
                <input type="submit" name="submit" value="submit" />
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return { state };
  // console.log(state.product, "maptostate");
  // return { error: state.product.message_error };

  //return { product: state.product };
};

export default connect(mapStateToProps, { AddProduct1 })(AddProduct);
