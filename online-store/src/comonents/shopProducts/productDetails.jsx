import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductById } from "../../redux/action/products/products";
import { Card, Button } from "react-bootstrap";
import Loading from "../spinner/spinner";
import "./shop.css";

class ProductDetails extends Component {
  paraId;
  constructor(props) {
    super(props);
    console.log(props);
    this.paraId = this.props.match.params.id;
  }
  componentDidMount() {
    this.props.fetchProductById(this.paraId);
  }
  // AddCart = id => {
  //   this.props.AddToCart(id);
  // };
  render() {
    console.log(this.paraId);
    if (this.props.loading) {
      return <Loading />;
    }
    if (!this.props.product) {
      return null;
    }
    return (
      <div className="container">
        <h1>Product Details</h1>

        <div className="row">
          {/* <div className="col-md-4">
            <Card style={{ width: "18rem", paddingLeft: "25px" }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title> {this.props.product.data.name}</Card.Title>
                <Card.Text>Price </Card.Text>
                <Card.Text>Offer Price </Card.Text>
                <Button
                  variant="primary"
                  onClick={() =>
                    this.props.history.push(`/product/${item._id}`)
                  }
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div> */}
        </div>

        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={this.props.product.data.image} />
                  </div>
                  {/* <div className="tab-pane" id="pic-2">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-5">
                    <img src="http://placekitten.com/400/252" />
                  </div> */}
                </div>
                {/* <ul class="preview-thumbnail nav nav-tabs">
                  <li class="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-5" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                </ul> */}
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">
                  {" "}
                  {this.props.product.data.name}
                </h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">
                  {this.props.product.data.description}
                </p>
                <h4 className="price">
                  Original price: <span> {this.props.product.data.price}</span>
                </h4>
                <h4 className="price">
                  current price:{" "}
                  <span> {this.props.product.data.offerPrice}</span>
                </h4>
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this product!{" "}
                  <strong>(87 votes)</strong>
                </p>
                {/* <h5 className="sizes">
                  sizes:
                  <span className="size" data-toggle="tooltip" title="small">
                    s
                  </span>
                  <span className="size" data-toggle="tooltip" title="medium">
                    m
                  </span>
                  <span className="size" data-toggle="tooltip" title="large">
                    l
                  </span>
                  <span
                    className="size"
                    data-toggle="tooltip"
                    title="xtra large"
                  >
                    xl
                  </span>
                </h5> */}
                {/* <h5 className="colors">
                  colors:
                  <span
                    className="color orange not-available"
                    data-toggle="tooltip"
                    title="Not In store"
                  ></span>
                  <span className="color green"></span>
                  <span className="color blue"></span>
                </h5> */}
                <div className="action">
                  {/* <button className="add-to-cart btn btn-default" type="button">
                    add to cart
                  </button>
                  <button className="like btn btn-default" type="button">
                    className{" "}
                  </button> */}
                  {/* <Button
                    variant="primary"
                    onClick={() => this.AddCart(this.props.product.data._id)}
                  >
                    Add To Cart
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    product: state.shopProducts.item,
    loading: state.shopProducts.loading
  };
};
export default connect(mapStateToProps, { fetchProductById })(ProductDetails);
