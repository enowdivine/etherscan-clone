import React from "react";
import "./Showcase.css";
import { GrFormSearch } from "react-icons/gr";

const Showcase = () => {
  return (
    <div className="showcase-wrapper">
      <div className="container ">
        <div className="filter">
          <h4>The Ethereum Blockchain Explorer</h4>
          <div className="filter-form">
            <div class="input-group mb-2">
              <select id="inputState" className="rounded-left">
                <option selected>All Filters</option>
                <option>...</option>
              </select>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="Search by Address / Txn Hash / Block / Token"
              />
              <div class="input-group-prepend">
                <div class="input-group-text search-btn">
                  <GrFormSearch size={30} style={{ fill: "white" }} />
                </div>
              </div>
            </div>
          </div>

          <p className="p-text">
            <span>Featured: </span>Build precise & Reliable Apps wih{" "}
            <span>FTMscan APIs</span>. <a href="#">Learn More!</a>
          </p>
        </div>
        <div className="ads">
          <a href="https://goto.etherscan.com/rd/S9EIHWMENTEQB94NM5APUAQ5C">
            <img
              src="https://etherscan.io/images/gen/aax_057-059_321x101.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
