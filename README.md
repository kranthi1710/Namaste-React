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
