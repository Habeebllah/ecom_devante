import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <main className="main__content_wrapper">

      {/* <!-- Start breadcrumb section --> */}
        <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        {/* <div className="breadcrumb__content text-center">
                            <h1 className="breadcrumb__content--title text-white mb-25">My Account</h1>
                            <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                <li className="breadcrumb__content--menu__items"><a className="text-white" href="index.html">Home</a></li>
                                <li className="breadcrumb__content--menu__items"><span className="text-white">My Account</span></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End breadcrumb section --> */}




        {/* <!-- my account section start --> */}
        <section className="my__account--section section--padding">
            <div className="container">
                <p className="account__welcome--text">Hello, Admin welcome to your dashboard!</p>
                <div className="my__account--section__inner border-radius-10 d-flex">
                    <div className="account__left--sidebar">
                        <h2 className="account__content--title h3 mb-20">My Profile</h2>
                        <ul className="account__menu">
                            <li className="account__menu--list active"><a href="my-account.html">Dashboard</a></li>
                            <li className="account__menu--list"><a href="my-account-2.html">Addresses</a></li>
                       
                            <li className="account__menu--list"><Link to="/login">Log Out</Link></li>
                        </ul>
                    </div>
                    <div className="account__wrapper">
                        <div className="account__content">
                            <h2 className="account__content--title h3 mb-20">Orders History</h2>
                            <div className="account__table--area">
                                <table className="account__table">
                                    <thead className="account__table--header">
                                        <tr className="account__table--header__child">
                                            <th className="account__table--header__child--items">Order</th>
                                            <th className="account__table--header__child--items">Date</th>
                                            <th className="account__table--header__child--items">Payment Status</th>
                                            <th className="account__table--header__child--items">Fulfillment Status</th>
                                            <th className="account__table--header__child--items">Total</th>	 	 	 	
                                        </tr>
                                    </thead>
                                    <tbody className="account__table--body mobile__none">
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">#2014</td>
                                            <td className="account__table--body__child--items">February 06, 2022</td>
                                            <td className="account__table--body__child--items">Paid</td>
                                            <td className="account__table--body__child--items">Unfulfilled</td>
                                            <td className="account__table--body__child--items">$40.00 USD</td>
                                        </tr>
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">#2024</td>
                                            <td className="account__table--body__child--items">February 06, 2022</td>
                                            <td className="account__table--body__child--items">Paid</td>
                                            <td className="account__table--body__child--items">Fulfilled</td>
                                            <td className="account__table--body__child--items">$44.00 USD</td>
                                        </tr>
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">#2164</td>
                                            <td className="account__table--body__child--items">February 06, 2022</td>
                                            <td className="account__table--body__child--items">Paid</td>
                                            <td className="account__table--body__child--items">Unfulfilled</td>
                                            <td className="account__table--body__child--items">$36.00 USD</td>
                                        </tr>
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">#2345</td>
                                            <td className="account__table--body__child--items">February 06, 2022</td>
                                            <td className="account__table--body__child--items">Paid</td>
                                            <td className="account__table--body__child--items">Unfulfilled</td>
                                            <td className="account__table--body__child--items">$87.00 USD</td>
                                        </tr>
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">#1244</td>
                                            <td className="account__table--body__child--items">February 06, 2022</td>
                                            <td className="account__table--body__child--items">Paid</td>
                                            <td className="account__table--body__child--items">Fulfilled</td>
                                            <td className="account__table--body__child--items">$66.00 USD</td>
                                        </tr>
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">#3455</td>
                                            <td className="account__table--body__child--items">February 06, 2022</td>
                                            <td className="account__table--body__child--items">Paid</td>
                                            <td className="account__table--body__child--items">Fulfilled</td>
                                            <td className="account__table--body__child--items">$55.00 USD</td>
                                        </tr>
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">#4566</td>
                                            <td className="account__table--body__child--items">February 06, 2022</td>
                                            <td className="account__table--body__child--items">Paid</td>
                                            <td className="account__table--body__child--items">Unfulfilled</td>
                                            <td className="account__table--body__child--items">$87.00 USD</td>
                                        </tr>
                                    </tbody>
                                    <tbody className="account__table--body mobile__block">
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr>
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr>
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr>
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr>
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr>
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr>
                                        <tr className="account__table--body__child">
                                            <td className="account__table--body__child--items">
                                                <strong>Order</strong>
                                                <span>#2014</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Date</strong>
                                                <span>November 24, 2022</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Payment Status</strong>
                                                <span>Paid</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Fulfillment Status</strong>
                                                <span>Unfulfilled</span>
                                            </td>
                                            <td className="account__table--body__child--items">
                                                <strong>Total</strong>
                                                <span>$40.00 USD</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- my account section end --> */}


      </main>
    </>
  );
};

export default Account;
