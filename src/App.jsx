import React, { useEffect,useState } from "react"
import List from "./components/List.jsx";
import InputWithLabel from "./components/InputWithLabel.jsx";

// Always Manage state at a component level where every component thats interested in it is either one that manages the state or one below the managing component
// if a component below needs to update the state, pass a callback handler down to it wch allows it to manage the state
// if a component needs the state, pass it down as props 

// //a custom hook to encapsulate the functionality of the useState and useEffect hooks
// const useSemiPersistentState = (key,initialState) => {
//   const [value, setValue] = useState(
//       localStorage.getItem('value') || initialState
//     )

//   useEffect(() => {
//     localStorage.setItem(key, value)
//   }, [value,key])

//   return [value, setValue]
// }

const App = () => {
  //using props in react components
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ]

  // // we are going to create a custom hook that synchronises the state with the browser's local storage
  // const [searchTerm, setSearchTerm] = useSemiPersistentState('search',"React")

  // the useState function takes an initial state as an argument. this tells react that this state will change over time
  // the function returns an array of two entries.the first  entry represents the current state
  // and the second entry is a function to update the state
  const [searchTerm,setSearchTerm] =  useState(localStorage.getItem('search') || 'React')
  // the line above tells the useState hook to use the  last saved value in localStorage as the initial state or "React" if the value is not found 

  //we can handle the side effect of remembering the last search and storing it in localstorage by using the useEffect hook
  useEffect(() => {
    // here we create a side-effect to keep track of the recent searches by storing them in local storage
    localStorage.setItem("search", searchTerm)
  }, [searchTerm])
  // the useEffect hook takes two arguments: the first is a function that runs our sideeffect.which is storing searchTerm into localStorage
  // the second argument is a dependency array of variables. in case one of these variables changes, the function for the side effect is called
  // leaving out the second argument would make the function for the side effect run on every render of the component
  //  using an empty array of dependencies makes the function run only once, after the component renders for the first time.

  // the handleSearch function is defined here, passed down to the search component as a prop
  // but still implemented up here. this allows us to lift state from the search component to the app component
  // the callback handler enables the search compnent to pass state up the component tree.
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  //the filter function takes a function as an argument which accesses each element in the array and returns true or false
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel
        id='search'
        value={searchTerm} 
        onInputChange={handleSearch} 
      >
        <strong>Search: </strong>
      </InputWithLabel>
      <p>
        Searching for  <strong>{searchTerm}</strong>
      </p>
      <hr/>
      {/* to use props in the list component, we will pass the array to the list HTML attribute */}
      <List list={searchedStories} />   
    </div>
  )
}

export default App
