import React from "react";
import "./store.css";

import Card from "../../components/Card";

export default function Store() {
  return (
    <>
      <section className="store-header-section">
        <div className="store-header-container">
          <h1 className="store-header-title">I-STORE</h1>
          <p className="store-header-description">
            Explore our amazing products.
          </p>
        </div>
      </section>
      <section className="store-products-section">
        <div className="store-products-header">
          <span className="store-products-quantity">Total Products: 10</span>
          <label
            style={{ display: "none" }}
            className="store-products-search-label"
            htmlFor="store-products-search"
          ></label>
          <input
            className="store-products-search-input"
            type="text"
            placeholder="Search products"
            name="store-products-search"
            id="store-products-search"
          />
        </div>
        <div className="store-products-container">
          <Card />
        </div>
      </section>

      <footer>2020 React Store </footer>
    </>
  );
}
