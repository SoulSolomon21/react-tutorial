import React from 'react'
import Item from "./Item.jsx"

//the spread operator is used on the left side of an assignment, while the rest operator happens on the right side
//the rest operator is used to separate an object from some of its properties
//the spread operator allows us to spread all key/value pairs of an object to another object
const List = ({ list }) => (
        // we access the array passed to the List component as the list property of the props object 
        // which is passed as a parameter to the List component. we then map through the list 
    <ul>
        {list.map(({ objectID, ...item }) => (
            // using the spread and rest operators to destructure the item object
            <Item 
            key={objectID} {...item} 
            />
        ))}
  </ul>
)

export default List