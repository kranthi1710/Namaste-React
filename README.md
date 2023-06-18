Props are just normal arguments to our function
Passing a prop to a function is just like sending arguments to a function
Passing props to a component
Props will be an object

Config driven UI:
That ur UI is driven by config(API data)
Ex: Carousal data is different for different locations. UI is changed by these configs from Backend API data
--Suppose if you want to show different background colors, we have to send color through Backend API data

// When ever , we are loopig on to anything(map, filter,reduce), we have to always need to give key and key should be unique
why we need keys:(optimizes performance)
when we have keys to cards, then if any new card added, it will render only that added card
If we dont add keys, then all cards along with newly added card are re-rendered , which will be a Performance hit(bad practice)

Note: React official docs says "We don't recommend using indexs for keys as order or items might change".(Index as a key is an anti-pattern)

// unique key >>>greater than>> Index as a key >>>> Not using keys(not accepted)

// Use optional character(?) for avoiding unnecessary errors

Best Practices:
Separate files for separate components

Read create folder structure--imp

Never ever keep hardcoded data in component file

utils---Where we keep all constants and shared files

Two types of Export/Import

- Default Export/Import
  export default Component;
  import Component from "path";

- Named Export/Import
  export const Component;
  import {Component} from "path";

  React is fast in DOM manipulation---Suppose if you want to keep ur data and UI layer consistent with each other, ie where Angular/React/vue comes in place and trying to solve

#React hooks
-React hook is normal JS function which is given by React. It is pre-built and this utility function which has some logic written in React

-useState()
---It is a hook, used to check on state of component. It is accessible locally to that component.
We need to import useState as a named import
we have to get variable from useState in the form of array
ex:const [variable]=useState([]);//Inside paranthesis of useState, we have given [] which is a default state of variable. It can be {} or "".or null or [{}]
ex: let [listOfRestaurants]=useState([]);--->same as let listOfRestaurants=[];
If we want to modify this above variable, we need to do it by a function which has to be passed as second argument to the useState variable---like below:
let [listOfRestaurants,setListOfRestaurants]=useState([]);

->whenever the state variable updates, React re-renders the component.

UseEffect:
This hook will be invoked after component rendering.
It has two arguments namely callback function and a dependency array

Fetch()
It is the super power given to us by Browsers. JS Engine will contain this.It will fetch data from API.
Fetch will return a promise. To resolve a promise, we will use .then and for handling errors, we will use .catch
Or we can use asyn and await also for resolve promise.

Make the function async and await to data to come. This will resolve promise.
Once we get data, we have to conert data to JSON using .json() method.
const json = await data.json();
Above we use await again for the promise to resolve and get data.

If we use swiggy API in our localhost,we will get CORS issue.
Our Browser is not allowing us to call Swiggy's API from localhost(from one origin to another origin). Origin Mismatch--> Browser will block that API call---> CORS issue
