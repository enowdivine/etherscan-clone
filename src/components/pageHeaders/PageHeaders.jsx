import { Link } from "react-router-dom";
// import "./Header.css";
import { HiUserCircle } from "react-icons/hi";
import { FaEthereum, FaSearch } from "react-icons/fa";

const PageHeaders = () => {
  return (
    <header className="container">
      <div className="brand">
        <img src="/images/etherscan.png" alt="" />
        <h4>
          <Link to="/">Etherscan</Link>
        </h4>
      </div>
      <div>
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
              <button class="input-group-text search-btn">
                <FaSearch size={10} />
              </button>
            </div>
          </div>
        </div>
        <div className="nav-list">
          <div className="home">
            <Link to="/"> Home</Link>
          </div>
          <div className="dropdown">
            <spam class="dropbtn">Blockchain</spam>
            <div class="dropdown-content">
              <Link to="#"> View Txns</Link>
              <Link to="#"> View Pending Txns</Link>
              <Link to="#"> View Contract Internal Txns</Link>
              <hr />
              <Link to="/blocks">View Blocks</Link>
              <Link to="#">Forked Blocks (Reorgs)</Link>
            </div>
          </div>
          <div className="tokens">
            <Link to="#"> Tokens</Link>
          </div>
          <div className="resources">
            <Link to="#"> Resouces</Link>
          </div>
          <div className="more">
            <Link to="#"> More</Link>
          </div>
          <div className="sign-in">
            <HiUserCircle />
            <Link to="#"> Sign In</Link>
          </div>
          <div className="ethereum">
            <Link to="#">
              <FaEthereum />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeaders;
