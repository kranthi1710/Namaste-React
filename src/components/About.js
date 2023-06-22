import User from "./User";
import UserClass from "./UserClass";
import React from "react";
//Destructure above line
//import {Component} from "react";
//class About extends Component;

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent COmponent did mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Page</h1>
        <UserClass name={"KKR(class)"} location={"HyderaBAD"} />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <User name={"KKr(function)"} />
//       <UserClass name={"KKR(class)"} location={"HyderaBAD"} />
//     </div>
//   );
// };
export default About;
