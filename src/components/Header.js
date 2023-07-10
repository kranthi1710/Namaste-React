import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// As above Logo_url is named export, we need to keep in curly braces while importing

const Header = (props) => {
  //BY declaring normal JS variable, we can't update the DOM for that variable. SO we use state variable using useState hook
  // useState hook will reconcile(diff algorithm runs btwn previous Virtual DOM and current Virtual DOM) and re-render the Total Component(Header) with only updated values , on update of state variable.
  // let btnName = "Login";

  //How const variable is gettig updated/modified--->AS we are re-rendering total component again on update of state variable,THen this btnNameReact variable is a new variable than before and create new instance and gives it updated value.
  //SO const variable is not throwing error and getting updated value.

  // Total component gets re-rendered but only updated values gets re-rendered on that re-render but not other things like LOgo
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      {/* As logo_url is javascript variable, we need to keep it in curly braces */}
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items" style={props.styleCar}>
        <ul>
          <li>
            {/* To get Emoji's windows + . */}
            Online Status : {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
