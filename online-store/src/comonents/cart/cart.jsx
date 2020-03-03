import React, { Component } from "react";
import { connect } from "react-redux";
import { AddToCart } from "../../redux/action/products/products";
import Loader from "../spinner/spinner";
import "./cart.css";
class Cart extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  render() {
    if (this.props.loading) {
      return <Loader />;
    }

    return (
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
              {this.props.cartitem ? (
                this.props.cartitem.items.map(data => (
                  <tr key={data.data._id}>
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
                            class="fa fa-chevron-circle-up"
                            aria-hidden="true"
                          ></i>
                          <h3> {data.quantity}</h3>

                          <i
                            class="fa fa-chevron-circle-down"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </td>
                    <td className="col-sm-1 col-md-1 text-center">
                      <strong>{data.data.price}</strong>
                    </td>
                    <td className="col-sm-1 col-md-1 text-center">
                      <strong>$14.61</strong>
                    </td>
                    <td className="col-sm-1 col-md-1">
                      <button type="button" className="btn btn-danger">
                        <span className="glyphicon glyphicon-remove"></span>{" "}
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <h1>Waiting for response......</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    cartitem: state.cart,
    loading: state.details.loading
  };
};
export default connect(mapStateToProps, { AddToCart })(Cart);
//export default Cart;
