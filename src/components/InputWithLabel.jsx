import React from 'react'

const InputWithLabel = ({ id , label, value, type="text", onInputChange, children }) => {
// props destructuring
// we can destructure the props inside the function body or we can do it directly in the function signature of the component
// const { search , onSearch} = props
//this allows us to use the values in the props directly without having to treat them like object properties


  // Handler functions in jsx
  //  these are functions to respond to user interaction
  // this is a function for the change event of the input field and its called an event handler
    const handleChange = (e) => {
      // to access the emitted value of the input field, we can use the line below
      console.log(e.target.value)

      // the onSearch function is defined in the app component but then passed down to the search component as part of its props
      // its referred to as a callback handler
      props.onSearch(e)
    }
    // we pass a function from the parent component to the child component via props but have the actual implementation of the function in the parent component
    // when an event handle is passed as props from a parent component to its child component, it becomes a callback handler
    // callback handlers passed as functions in props can be used to communicate up the component hierarchy.

  return (
    <>
        <label htmlFor={id}>{children} </label>
        &nbsp;
        {/* the handleChange function is then passed to the onChange attribute of the input field  */}
        {/* any time sth is typed into the input field ie when its content changes, the function is called */}
        {/* always pass the function to the onChange not a return value, ie use the function name without the brackets */}
        <input 
          id={id} 
          type={type} 
          value = {value}
          onChange={onInputChange}
        />
    </>
  )
}

export default InputWithLabel