import React from "react";

// User class will inherit some properties from React.Component which is provided by React
class UserClass extends React.Component {
  //class based component is a class  which has a render method, which returns some piece of JSX.
  //whenever you initialize or create a instance of a class(NOT invoke---Only functions are invoked), A constructor is called and props is extracted and used anywhere in class using super(props) and this keyword
  //why do we always have to write super(props)
  constructor(props) {
    super(props);
    //Here state is a reserved keyword and state is big whole object with all the state variables
    this.state = {
      count: 0,
    };
    console.log("child constructor");
  }
  componentDidMount() {
    console.log("Child COmponent did mount");
  }
  render() {
    console.log("child render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        {/* we can access props properties anywhere inside class using "this" keyword */}
        <h2> class Name:{name}</h2>
        <h2>LOcation:{location}</h2>
        <h2>Class Count- {count}</h2>
        {/* onClick Handler takes a callback function and when click, we update state variable */}
        <button
          onClick={() => {
            //NOTE: NEVER UPDATE STATE variables DIRECTLY
            //we can use this.setState anywhere inside a class
            //whenever this state vaiable will update the count, React will re-render the component and it is just changing the portion of the count variable
            this.setState({
              //This Object we are in will contain the updated value of state variables
              // Whatever variables we pass here in setState, only those variables gets updates eventhough if we have other variables in state(ex:count3, count4)--these won't update until we pass them in setState
              count: this.state.count + 1,
              // count2: this.state.count2 + 1,
            });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default UserClass;
