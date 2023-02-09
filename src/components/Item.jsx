import React from 'react'

const Item = ({ url, title, author, num_comments, points }) => {
  //destructuring the item object to get its attributes
  // this would work well if we were destucturing the item object  in the function signature
  // const { url, title, author, num_comments, points } = item

    // console.log(props)
    /*  by assigning a key attribute to each list item's element, react can identify items if the list changes */
    /*  avoid using the index of the item in the array to make surethe key attribute is a stable identifier */
    /*  eg if the list changes its orer, react will not be able to identify the items properly using array index */
 return(
    <li>
            <span>
              <a href={url}>{title}</a>
            </span>
            <span>{author}</span>
            <span>{num_comments}</span>
            <span>{points}</span>
          </li>
)}

export default Item