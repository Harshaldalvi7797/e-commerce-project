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
      name: "",
      category: "",
      price: "",
      decription: "",
      image: ""
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }
  setproduct = e => this.setState({ name: e.target.value });
  setcategory = e => this.setState({ category: e.target.value });
  setprice = e => this.setState({ price: e.target.value });
  getimage = e => this.setState({ image: e.target.files[0] });
  // On submit
  onSubmitMethod = async e => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", this.state.image);
    data.append("product", this.state.product);
    data.append("price", this.state.price);
    data.append("category", this.state.category);

    console.log(data);
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
                  value={this.state.name}
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
                <input type="file" name="image" onChange={this.getimage} />
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
};

export default connect(mapStateToProps, { AddProduct1 })(AddProduct);
