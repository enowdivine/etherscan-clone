import { Link } from "react-router-dom";
import "./Header.css";
import { HiUserCircle } from "react-icons/hi";
import { FaEthereum } from "react-icons/fa";

const Header = () => {
  return (
    <header className="container">
      <div className="brand">
        <img src="/images/etherscan.png" alt="" />
        <h4>Etherscan</h4>
      </div>
      <div className="nav-list">
        <div className="home">
          <Link to="#"> Home</Link>
        </div>
        <div className="blockchain">
          <Link to="#"> Blockchain</Link>
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
    </header>
  );
};

export default Header;
