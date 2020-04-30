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

  // handleInput = async e => {
  //   e.preventDefault();
  //   if (this.validator.allValid()) {
  //     let data = {};
  //     // console.log(data);
  //     // console.log(this.props.AddProduct1(data));
  //     let res = await axios.post(
  //       "http://localhost:4600/api/addproduct",
  //       {
  //         product: this.state.product,
  //         category: this.state.category
  //       },

  //       JSON.stringify(data),
  //       // @ts-ignore
  //       {
  //         headers: {
  //           "Content-Type":
  //             "multipart/form-data; boundary=--------------------------178592083580993132863015"
  //         }
  //       }
  //     );
  //     console.log(res);
  //     console.log(data);
  //   } else {
  //     this.validator.showMessages();
  //     this.forceUpdate();
  //   }
  // };

  handleFormSubmit = async e => {
    const data = new FormData();
    data.append("product", this.state.product);
    data.append("image", this.state.image);
    data.append("category", this.state.category);
    console.log(data);
    // this.props.AddProduct1(data);
    await axios
      .post("http://localhost:4600/api/addproduct", data, {})
      .then(res => {
        console.log(res);
        alert("Thank you");
        this.props.close();
      });
  };
  //Image Save
  img = e => {
    this.setState({ photo: e.target.files[0] }, () => {
      console.log(this.state.photo);
    });
  };
  render() {
    // value={this.state.name}
    // onChange={this.setproduct}
    return (
      <React.Fragment>
        <Navigation />{" "}
        <div className="container">
          <form onSubmit={this.handleFormSubmit}>
            <div className="row">
              <div className="col-md-3">
                <input
                  type="text"
                  name="name"
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
