import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";
import { connect } from "react-redux";
import { AddProduct1 } from "../../redux/action/product/product";
import Navigation from "../Navigation";
import { file } from "@babel/types";
class AddProduct extends Component {
  constructor(props) {
    super(props);
    // this.state = { apiResponse: "" };
    this.state = {
      name: "",
      subcategory: "",
      price: "",
      decription: "",
      image: "",
      offerPrice: ""
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }
  setproduct = e => this.setState({ name: e.target.value });
  setsubcategory = e => this.setState({ subcategory: e.target.value });
  setprice = e => this.setState({ price: e.target.value });
  setofferPrice = e => this.setState({ offerPrice: e.target.value });
  setdecription = e => this.setState({ decription: e.target.value });
  getimage = e => this.setState({ image: e.target.files[0] });

  handleInput = async e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        name: this.state.name,
        subcategory: this.state.subcategory,
        image: this.state.image,
        price: this.state.price,
        decription: this.state.decription,
        offerPrice: this.state.offerPrice
      };
      console.log(data);
      await this.props.AddProduct1(data);
      console.log(data);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  // On submit

  render() {
    // value={this.state.name}
    // onChange={this.setproduct}
    return (
      <React.Fragment>
        <Navigation />{" "}
        <div className="container">
          <div className="row">
            <form onSubmit={this.handleInput}>
              <div className=" form-group">
                <input
                  type="text"
                  className="form-control"
                  name="product"
                  placeholder="Enter Product name"
                  value={this.state.name}
                  onChange={this.setproduct}
                />{" "}
                {this.validator.message(
                  "Product name",
                  this.state.name,
                  "required"
                )}
              </div>
              <div className=" form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subcategory"
                  placeholder="Enter Product category"
                  value={this.state.subcategory}
                  onChange={this.setsubcategory}
                />
                {this.validator.message(
                  "subcategory",
                  this.state.subcategory,
                  "required"
                )}
              </div>
              <div className=" form-group">
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  placeholder="Enter Product Price"
                  value={this.state.price}
                  onChange={this.setprice}
                />
                {this.validator.message("price", this.state.price, "required")}
              </div>
              <div className=" form-group">
                <input
                  type="text"
                  className="form-control"
                  name="offerPrice"
                  placeholder="Enter Product Offer Price"
                  value={this.state.offerPrice}
                  onChange={this.setofferPrice}
                />
                {this.validator.message(
                  "OfferPrice",
                  this.state.offerPrice,
                  "required"
                )}
              </div>
              <div className=" form-group">
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Enter Product decription"
                  value={this.state.decription}
                  onChange={this.setdecription}
                />
                {this.validator.message(
                  "decription",
                  this.state.decription,
                  "required"
                )}
              </div>
              <div className=" form-group">
                {/* <input type="file" name="image" onChange={this.setimage} /> */}
                <input type="file" name="image" onChange={this.getimage} />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-success"
                  name="submit"
                  value="submit"
                />
              </div>
            </form>
          </div>
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
