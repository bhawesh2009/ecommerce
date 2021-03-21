import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Card } from "react-bootstrap";
import * as productAction from "../actions/productAction";
import ErrorMessage from "../components/Message/errorMessage";
import ProductReview from "../components/productReview/ProductReview";
import Rating from "../components/Rating/Rating";
import {
  Select,
  Button,
  FormControl,
  makeStyles,
  MenuItem,
} from "@material-ui/core/";
import * as productConstants from "../constants/productConstants";
import SinglePageLoader from "../components/Loader/SinglePageLoader";
import { addToCart } from "../actions/cartAction";
import ReactImageMagnify from 'react-image-magnify';
import PinchZoomPan from "react-responsive-pinch-zoom-pan-magnifier";





const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 85,
    top: -17,
    left: 6,
    position: "absolute",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ProductDetails = ({ match, history }) => {
  const [qty, setQty] = useState(1);

  const productData = useSelector((state) => state.Product);
  const reviewResponses = useSelector((state) => state.createReview);

  const { error: createReviewError } = reviewResponses;

  const { loading, product, error } = productData;
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productAction.product(match.params.productId));
    // eslint-disable-next-line
  }, [dispatch, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(match.params.productId, qty));
    history.push("/cart");
  };

  return (
    <>
      {createReviewError && (
        <ErrorMessage
          header="Opps!!!"
          message={createReviewError}
          reset={productConstants.CREATE_REVIEW_RESET}
        />
      )}
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <SinglePageLoader />
      ) : error ? (
        <ErrorMessage header="Something went wrong" message={error} />
      ) : (
        <>
          <Row>
            <Col md={6}>
            <div style={{ width: '500px', height: '500px' }}>
            <PinchZoomPan>
           <img src={product.productImage} alt ={product.name}/>
           </PinchZoomPan>
           </div>
            </Col>
            <Col id ="ron" md={3} >
              <ListGroup id="bha" variant="flush">
                <ListGroup.Item id="ved">
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item id="ved">
                  <Rating
                    value={product.averageRating}
                    text={`${
                      product.Reviews ? product.Reviews.length : 0
                    } reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item id="ved">Price: RS{product.price}</ListGroup.Item>
                <ListGroup.Item id="ved">
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col id="ron" md={3}>
              <Card>
                <ListGroup id="bha" variant="flush">
                  <ListGroup.Item id="ved">
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>RS{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item id="ved">
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item id="ved">
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <FormControl className={classes.formControl}>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              onChange={(e) => setQty(e.target.value)}
                              label="Qty"
                              value={qty}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <MenuItem key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </MenuItem>
                                )
                              )}
                            </Select>
                          </FormControl>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={addToCartHandler}
                      fullWidth
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <ProductReview productId={match.params.productId} />
        </>
      )}
    </>
  );
};
export default ProductDetails;
