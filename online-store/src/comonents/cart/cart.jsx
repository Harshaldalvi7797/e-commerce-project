import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AddToCart,
  RemoveCart,
  AddQuentity,
  RemoveQuentity
} from "../../redux/action/products/products";
import Loader from "../spinner/spinner";
import "./cart.css";
class Cart extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  UpdateQuentity(item) {
    this.props.AddQuentity(item);
  }
  RemoveQuentity(item) {
    this.props.RemoveQuentity(item);
  }

  // removeCart() {}
  render() {
    if (this.props.loading) {
      return <Loader />;
    }

    if (this.props.cartitem.items.length > 0) {
      return (
        <React.Fragment>
          <div className="container">
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Total</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {this.props.cartitem ? ( */}
                  {this.props.cartitem.items.map(data => (
                    <tr key={data._id}>
                      <td className="">
                        <div className="media">
                          <a className="thumbnail pull-left" href="#">
                            {" "}
                            <img
                              className="media-object"
                              src={data.data.image}
                            ></img>
                          </a>
                          <div className="media-body">
                            {/* <h4 className="media-heading">
                            <a href="#">Product name</a>
                          </h4> */}

                            {/* <span>Status: </span>
                          <span className="text-success">
                            <strong>In Stock</strong>
                          </span> */}
                          </div>
                        </div>
                      </td>
                      <td className="col-sm-8 col-md-6">
                        <div className="media">
                          <a className="thumbnail pull-left" href="#">
                            {" "}
                            <img className="media-object" src=""></img>
                          </a>
                          <div className="media-body">
                            <h4 className="media-heading">{data.data.name}</h4>
                          </div>
                        </div>
                      </td>
                      <td className="col-sm-1 col-md-3">
                        {/* <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          value="3"
                        /> */}
                        <div className="input-group">
                          <div>
                            <i
                              className="fa fa-chevron-circle-up"
                              aria-hidden="true"
                              onClick={() => this.UpdateQuentity(data.data)}
                            ></i>
                            <h3> {data.quantity}</h3>

                            <i
                              className="fa fa-chevron-circle-down"
                              aria-hidden="true"
                              onClick={() => this.RemoveQuentity(data.data)}
                            ></i>
                          </div>
                        </div>
                      </td>
                      <td className="col-sm-1 col-md-1 text-center">
                        <strong>{data.data.price}</strong>
                      </td>
                      <td className="col-sm-1 col-md-1 text-center">
                        <strong>{data.data.price * data.quantity}</strong>
                      </td>
                      <td className="col-sm-1 col-md-1">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => this.props.RemoveCart(data.data._id)}
                        >
                          <span className="glyphicon glyphicon-remove"></span>{" "}
                          Remove
                        </button>
                      </td>
                    </tr>

                    // )) // ) : ( // <h1>Waiting for response......</h1>
                    // )}
                  ))}
                  {/* <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td>
                      <h3>Total</h3>
                    </td>
                    <td className="text-right">
                      <h3>
                        <strong>{this.props.total}</strong>
                      </h3>
                    </td>
                  </tr> */}
                  <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-default"
                        style={{ backgroundColor: "red" }}
                        onClick={() => this.props.history.push("/home")}
                      >
                        <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                        Continue Shopping
                      </button>
                    </td>
                    <td></td>
                    <td>
                      {" "}
                      <h3>
                        <strong>{this.props.total}</strong>
                      </h3>
                    </td>
                    <td>
                      <button type="button" className="btn btn-success">
                        Checkout{" "}
                        <span className="glyphicon glyphicon-play"></span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="container">
          <h1>Cart is Empty</h1>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    cartitem: state.cart,
    loading: state.details.loading,
    total: state.cart.items.reduce(
      (acumalator, nextstate) =>
        acumalator + nextstate.data.price * nextstate.quantity,
      0
    )
    // total: state.cart.items.reduce(
    //   (accumlator, nextstate) =>
    //     accumlator + nextstate.data.price * nextstate.quantity,
    //   0
    // )
  };
};
export default connect(mapStateToProps, {
  AddToCart,
  RemoveCart,
  AddQuentity,
  RemoveQuentity
})(Cart);
//export default Cart;
