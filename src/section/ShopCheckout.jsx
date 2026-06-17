import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product1 from "../assets/images/resource/products/1.jpg";
import Product2 from "../assets/images/resource/products/2.jpg";
import Product3 from "../assets/images/resource/products/3.jpg";

export default function CheckoutSection() {
  const [activePayment, setActivePayment] = useState(0);

  const products = [
    {
      id: 1,
      name: "Headphone",
      qty: 2,
      price: "$36.00",
      image: Product1,
    },
    {
      id: 2,
      name: "Luggage",
      qty: 3,
      price: "$115.00",
      image: Product2,
    },
    {
      id: 3,
      name: "Watch",
      qty: 1,
      price: "$68.00",
      image: Product3,
    },
  ];

  const paymentMethods = [
    {
      title: "Credit Card / Debit Card",
      content: (
        <div className="payment-info">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12 column">
              <div className="field-input mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="cardName"
                  placeholder="Name on the Card"
                  required
                />
              </div>
            </div>

            <div className="col-md-6 col-sm-12 column">
              <div className="field-input mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="cardNumber"
                  placeholder="Card Number"
                  required
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 column">
              <div className="field-input mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="expiryDate"
                  placeholder="Expiry Date"
                  required
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 column">
              <div className="field-input mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="securityCode"
                  placeholder="Security Code"
                  required
                />
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 column">
              <div className="field-input message-btn">
                <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">Make Payment</span></button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Direct Bank Transfer",
      content: (
        <div className="payment-info">
          <p className="mb-0">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order won&apos;t be shipped
            until the funds have cleared in our account.
          </p>
        </div>
      ),
    },
    {
      title: "Cheque Payment",
      content: (
        <div className="payment-info">
          <p className="mb-0">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order won&apos;t be shipped
            until the funds have cleared in our account.
          </p>
        </div>
      ),
    },
    {
      title: "Other Payment",
      content: (
        <div className="payment-info">
          <p className="mb-0">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order won&apos;t be shipped
            until the funds have cleared in our account.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section>
      <div className="container pt-80 pb-120">
        <div className="section-content dark-style">
          <form id="checkout-form">
            <div className="row mt-30">
              <div className="col-md-6">
                <div className="billing-details">
                  <div
                    className="h3 mb-30"
                    style={{ color: "var(--headings-color)" }}>
                    Billing Details
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                          id="companyName"
                          type="text"
                          className="form-control"
                          placeholder="Company Name"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="address">Address</label>
                        <input
                          id="address"
                          type="text"
                          className="form-control"
                          placeholder="Street address"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment, suite, unit etc. (optional)"
                        />
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="city">City</label>
                      <input
                        id="city"
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label>State/Province</label>
                      <select className="form-control">
                        <option>Select State</option>
                        <option>Australia</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="zip">Zip/Postal Code</label>
                      <input
                        id="zip"
                        type="text"
                        className="form-control"
                        placeholder="Zip/Postal Code"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label>Country</label>
                      <select className="form-control">
                        <option>Select Country</option>
                        <option>Australia</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional Information */}
              <div className="col-md-6">
                <div
                  className="h3 mb-3"
                  style={{ color: "var(--headings-color)" }}>
                  Additional Information
                </div>
                <label htmlFor="order_comments">
                  Order Notes{" "}
                  <span className="optional">(optional)</span>
                </label>
                <textarea
                  id="order_comments"
                  className="form-control"
                  rows={4}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                />
              </div>
              {/* Order Summary */}
              <div className="col-md-12 mt-30">
                <h3 className="text-white">Your order</h3>
                <table className="table table-dark table-striped table-bordered tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Product Name</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="product-thumbnail">
                          <Link to="/shop-product-details">
                            <img
                              src={product.image}
                              alt={product.name}
                            />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link to="/shop-product-details">
                            {product.name}
                          </Link>{" "}
                          x {product.qty}
                        </td>

                        <td>
                          <span className="amount">{product.price}</span>
                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td>Cart Subtotal</td>
                      <td>&nbsp;</td>
                      <td>$180.00</td>
                    </tr>

                    <tr>
                      <td>Shipping and Handling</td>
                      <td>&nbsp;</td>
                      <td>Free Shipping</td>
                    </tr>

                    <tr>
                      <td>Order Total</td>
                      <td>&nbsp;</td>
                      <td>$250.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Payment Methods */}
              <div className="col-md-12 mt-60">
                <div className="checkout-faq-box">
                  <div className="payment-method dark-style">
                    <h3 className="text-white">Choose a Payment Method</h3>

                    <ul className="accordion-box list-unstyled">
                      {paymentMethods.map((method, index) => (
                        <li
                          key={index}
                          className={`accordion block ${
                            activePayment === index ? "active-block" : ""
                          }`}
                        >
                          <div
                            className={`acc-btn ${
                              activePayment === index ? "active" : ""
                            }`}
                            onClick={() => setActivePayment(index)}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="icon-outer">
                              <i className="lnr-icon-chevron-down"></i>
                            </div>
                            {method.title}
                          </div>

                          {activePayment === index && (
                            <div className="acc-content current">
                              {method.content}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}