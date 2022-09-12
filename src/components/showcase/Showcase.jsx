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
            <input
              type="text"
              placeholder="Search by Address / Txn Hash / Block / Token"
            />
            <div className="search-btn">
              <span style={{ color: "white" }}>
                <GrFormSearch size={30} style={{ fill: "white" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
