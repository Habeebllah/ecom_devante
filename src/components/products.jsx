import React ,{ useContext } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../products"
import { CartContext } from '../cartContext';
const Products = () => {

  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (product) => {
    addToCart(product);
    console.log('Product added to cart:', product);
  };
  return (
    <>
      <section className="product__section section--padding color-scheme-2 pt-0">
        <div className="container-fluid">
          {/* <div className="section__heading text-center mb-35">
            <h2 className="section__heading--maintitle style2">
              Summer Collection
            </h2>
          </div> */}
          <div className="product__section--inner">
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30">
              {PRODUCTS.slice(0, 10).map((product) => (
                <div key={product.id}>
                  <div className="col mb-30">
                    <div className="product__items ">
                      <div className="product__items--thumbnail">
                        <Link
                          className="product__items--link"
                          to={`/productdetails/${product.id}`}
                        >
                          <img
                            className="product__items--img product__primary--img"
                            src={product.img}
                            alt="product-img"
                          />
                        </Link>
                        <div className="product__badge">
                          <span className="product__badge--items sale">
                            {product.sale}
                          </span>
                        </div>
                        <Link
                          className="product__add-to__cart--btn__style2 "
                          to="cart"
                          onClick={() => handleAddToCart(product)}
                        >
                          <svg
                            className="product__items--action__btn--svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22.51"
                            height="20.443"
                            viewBox="0 0 14.706 13.534"
                          >
                            <g transform="translate(0 0)">
                              <g>
                                <path
                                  data-name="Path 16787"
                                  d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                  transform="translate(0 -463.248)"
                                  fill="currentColor"
                                ></path>
                                <path
                                  data-name="Path 16788"
                                  d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                  transform="translate(-1.191 -466.622)"
                                  fill="currentColor"
                                ></path>
                                <path
                                  data-name="Path 16789"
                                  d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                  transform="translate(-2.875 -466.622)"
                                  fill="currentColor"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          <span className="add__to--cart__text">
                            {" "}
                            + Add to cart
                          </span>
                        </Link>
                      </div>
                      <div className="product__items--content text-center">
                        <span className="product__items--content__subtitle">
                          {product.title}
                        </span>
                        <h3 className="product__items--content__title h4">
                          <a href="product-details.html">
                            {product.product_title}
                          </a>
                        </h3>
                        <div className="product__items--price">
                          <span className="current__price">
                            {product.current_price}
                          </span>
                          <span className="price__divided"></span>
                          <span className="old__price">
                            {product.old_price}
                          </span>
                        </div>
                        <ul className="rating product__rating d-flex justify-content-center">
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg
                                className="rating__list--icon__svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.105"
                                height="14.732"
                                viewBox="0 0 10.105 9.732"
                              >
                                <path
                                  data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg
                                className="rating__list--icon__svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.105"
                                height="14.732"
                                viewBox="0 0 10.105 9.732"
                              >
                                <path
                                  data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg
                                className="rating__list--icon__svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.105"
                                height="14.732"
                                viewBox="0 0 10.105 9.732"
                              >
                                <path
                                  data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg
                                className="rating__list--icon__svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.105"
                                height="14.732"
                                viewBox="0 0 10.105 9.732"
                              >
                                <path
                                  data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </li>
                          <li className="rating__list">
                            <span className="rating__list--icon">
                              <svg
                                className="rating__list--icon__svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.105"
                                height="14.732"
                                viewBox="0 0 10.105 9.732"
                              >
                                <path
                                  data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
