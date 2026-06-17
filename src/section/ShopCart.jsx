import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product1 from "../assets/images/resource/products/1.jpg";
import Product2 from "../assets/images/resource/products/2.jpg";
import Product3 from "../assets/images/resource/products/3.jpg";

const initialProducts = [
  {
    id: 1,
    image: Product1,
    name: "Winter Black Jacket",
    size: "Medium",
    price: 36,
    quantity: 1,
  },
  {
    id: 2,
    image: Product2,
    name: "Swan Crop V-Neck Tee",
    size: "Small",
    price: 115,
    quantity: 1,
  },
  {
    id: 3,
    image: Product3,
    name: "Blue Solid Casual Shirt",
    size: "Large",
    price: 68,
    quantity: 1,
  },
];

const CartSection = () => {
  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id, type) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "add"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 70;
  const total = subtotal + shipping;

  return (
    <section>
      <div className="container pb-100">
        <div className="section-content">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-dark table-striped table-bordered tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="text-white">Photo</th>
                      <th className="text-white">Product Name</th>
                      <th className="text-white">Price</th>
                      <th className="text-white">Quantity</th>
                      <th className="text-white">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="cart_item">
                        <td className="product-remove">
                          <button
                            className="remove border-0 bg-transparent"
                            onClick={() => removeItem(product.id)}
                          >
                            ×
                          </button>
                        </td>

                        <td className="product-thumbnail">
                          <img
                            src={product.image}
                            alt={product.name}
                            width={80}
                            height={80}
                          />
                        </td>

                        <td className="product-name">
                          <Link to="/shop-product-details">
                            {product.name}
                          </Link>

                          <ul className="variation">
                            <li className="variation-size">
                              Size: <span>{product.size}</span>
                            </li>
                          </ul>
                        </td>

                        <td className="product-price">
                          <span className="amount">
                            ${product.price.toFixed(2)}
                          </span>
                        </td>

                        <td className="product-quantity">
                          <div className="product-details__quantity">
                            <div className="quantity-box">
                              <button
                                type="button"
                                className="sub"
                                onClick={() =>
                                  updateQuantity(product.id, "sub")
                                }
                              >
                                <i className="fa fa-minus"></i>
                              </button>

                              <input
                                type="number"
                                value={product.quantity}
                                readOnly
                              />

                              <button
                                type="button"
                                className="add"
                                onClick={() =>
                                  updateQuantity(product.id, "add")
                                }
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>

                        <td className="product-subtotal">
                          <span className="amount">
                            $
                            {(
                              product.price * product.quantity
                            ).toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    ))}

                    <tr className="cart_item">
                      <td colSpan={3}>
                        <form className="row g-3 coupon-form">
                          <div className="col-auto">
                            <input type="text" name="coupon_code" className="input-text form-control mr-1" id="coupon_code" placeholder="Coupon code"/>
                          </div>

                          <div className="col-auto">
                            <button
                              type="submit"
                              className="apply-button"
                            >
                              <span className="btn-title">
                                Apply Coupon
                              </span>
                            </button>
                          </div>
                        </form>
                      </td>

                      <td colSpan={2}></td>

                      <td>
                        <button
                          type="button"
                          className="theme-btn btn-style-one"
                        >
                          <span className="btn-title">
                            Update Cart
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-12 mt-30">
              <div className="row">
                <div className="col-md-5">
                  <h4 className="text-white">
                    Calculate Shipping
                  </h4>

                  <form className="form dark-style">
                    <div className="mb-10">
                      <select className="form-control">
                        <option>Select Country</option>
                        <option>Australia</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>

                    <div className="mb-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State/Country"
                      />
                    </div>

                    <div className="mb-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode/Zip"
                      />
                    </div>

                    <div className="mb-30">
                      <button
                        type="button"
                        className="theme-btn btn-style-one"
                      >
                        <span className="btn-title">
                          Update Totals
                        </span>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="col-md-2"></div>

                <div className="col-md-5">
                  <h4 className="text-white">Cart Totals</h4>

                  <table className="table table-dark table-bordered cart-total">
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>${subtotal.toFixed(2)}</td>
                      </tr>

                      <tr>
                        <td>Shipping and Handling</td>
                        <td>${shipping.toFixed(2)}</td>
                      </tr>

                      <tr>
                        <td>Order Total</td>
                        <td>${total.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>

                  <Link
                    to="/shop-checkout"
                    className="theme-btn btn-style-one"
                  >
                    <span className="btn-title">
                      Proceed to Checkout
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
