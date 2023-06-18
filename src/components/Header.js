import { LOGO_URL } from "../utils/constants";
// As above Logo_url is named export, we need to keep in curly braces while importing

const Header = (props) => {
  return (
    <div className="header">
      {/* As logo_url is javascript variable, we need to keep it in curly braces */}
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items" style={props.styleCar}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
