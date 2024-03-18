import logo from "../images/yourmarketplace.png";
import "./Header.css"

const Header = () => {
    return (
      <header className="app-header">
        <h2>Your Marketplace</h2>
        <img src={logo} className="app-logo" alt="logo" />
      </header>
    );
  };

  export default Header;