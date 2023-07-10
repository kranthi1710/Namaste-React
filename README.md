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
--NOTE : UseState used to create local state variables inside your functional components.
--NOTE : Always call useState in functional component itself, not out side of it like after imports and before component declaration.
--NOTE : Always try to call useState at top inside functional Component as JS is a Synchronous single threaded language. the code will run line by line from top
--NOTE : Never create useState in IF ELSE block and in any conditions(while etc) and not inside FOR loops and inside functions in functional component. This will create inconsistencies

->whenever the state variable updates, React re-renders the component.

UseEffect:
This hook will be invoked/called everytime on component rendering.
It has two arguments namely callback function and a dependency array
Dependency array changes the behaviour of this :
-If no Dependency Array---UseEffect is called on every render
-If Dependency array is empty----Then UseEffect is called on initial render and just once when component is rendered for first time
-If we keep some Dependency(ex:btnNameReact variable) in Dependency Array---useEffect is called everytime btnNameReact is updated

Fetch()
It is the super power given to us by Browsers. JS Engine will contain this.It will fetch data from API.
Fetch will return a promise. To resolve a promise, we will use .then and for handling errors, we will use .catch
Or we can use async and await also for resolving promise.

Make the function async and await to data to come. This will resolve promise.
Once we get data, we have to convert data to JSON using .json() method.
const json = await data.json();
Above we use await again for the promise to resolve and get data.

If we use swiggy API in our localhost,we will get CORS issue.
Our Browser is not allowing us to call Swiggy's API from localhost(from one origin to another origin). Origin Mismatch--> Browser will block that API call---> CORS issue

Shimmer UI:
Until we load actual page, We will show fake page instead of using spinner icon

React Fiber
It is the new Reconciliation process to efficiently manipulate the DOM. It will find out the Difference between two Virtual DOMs(current and previous) and updates the Actual DOM only when a portion is required

React Router:
TO create Routing configuration in our component:
import { createBrowserRouter } from "react-router-dom";
Configuration means some information that will define what will happen on a specific route.
Ex: what will happen if I call '/about' route.
createBrowserRouter---takes in some configuration(list of objects). Each and every object defines a different path and what should happen on that path

How/where to provide this configuration and render it:
We have RouterPovider component given by "react-router-dom"---It will actually provide this routing configuration to our App

How to create links that will navigate us to respective page:
-DOn't use anchor tags for creating that links, it will refresh total page
-Use Link Component provided by React-router-dom, it will not refresh page and Navigate to respective page.
import {Link} from "react-router-dom";

# Two types of Routing we will have in web applications

Client side routing---ONly components getting routed and no API call to backend
Server side routing---

Single Page Application: It is one page and only components are getting interchanged via client side routing.

Link--From react-router-dom--->Link is a component and behind scenes, it is using anchor tag.
Link is a wrapper over anchor tag. WHen you make "home" as link, then react-router-dom will keep a track that this "home" is a link and you dont have to refresh the page

# Class based components:

Mounting:
For example, if we say invoking a functional component means loading or mounting that function on to the webpage

-Loading a class based component onto the webpage means we are creating instance of this class and giving it props in constructor.
Whenever we are creating the instance of the class, constructor is called and this is the best place to receive props and it is best place to create state variables

# class based components

- whenever a class based component is instantiated, constructor is called first and after that render method

componentDidMount() is called when the component has mounted/loaded on screen.
why:
It is used to make API calls.(same like useEffect in functional component)
React wants to quickly render it and then make the API call and fill the data
LOAD->RENDER->API CALL->re-render

-If we have two child components in render method of class based component. while executing both child components one by one, React will batch the render phase and commit phase for these two childs. So first render phase will happen for both child components and then commit phase will happen for both.

-Render phase--constructor and render() methods are called
DOM and Refs and then componentDidUpdate() is called.

--DOM manipulation is expensive thing when we are loading the component, it takes lot of time, so React want to batch the render.
--When React is rendering in Rendering phase, React will trigger Reconciliation process. Everything in Render phase is happening in Virtual DOM. React will find difference. When it trys to update the DOM, it will find out all the Children, batch the render phase(This phase is faster than Commit phase) and render all children and then commit phase(batched children) will happen. This is why React is fast by optimizing the performance of App

<!--
-Parent Constructor
-Parent render

    --FIrst Constructor
    --First render

    --second constructor
    --second render

    <DOM Updated -- IN SINGLE BATCH>

    -FIrst ComponentDidMOunt
    -Second COmponentDidMount

- Parent componentDidMount
 -->

we have to do cleanup activities like clearIntervals of setIntervals in componentWillUnmount

UseEffect is not equal to componentDidMount as there are below differences:
useEffect is not using componentDidMount behind the scenes.
IMP: After first render, componentDidMount is called but after every subsequent render, componentDidUpdate is called

IMP: but for useEffect. find below points
This hook will be invoked/called everytime on component rendering.
It has two arguments namely callback function and a dependency array
Dependency array changes the behaviour of this :
-If no Dependency Array---UseEffect is called on every render
-If Dependency array is empty----Then UseEffect is called on initial render and just once when component is rendered for first time
-If we keep some Dependency(ex:btnNameReact variable) in Dependency Array---useEffect is called everytime btnNameReact is updated

# Optimizing Performance session

Single Responsibility Principle:
Suppose if we have a function or a class or any single responsible identity of ur code, that should have a single resposibility.
Ex:Like Header responsibility is just creating header
Advantages: Reusability, maintainable, testable

MODULARITY---Means you break down the code into differeent small components/modules. so that your code becomes more maintainable and testable.

Hooks are Utility or normal JS functions

# Custom hooks

We will take some resposibilty from a component and extract it inside a hook and insert this hook into our component, so that our component becomes more readable
