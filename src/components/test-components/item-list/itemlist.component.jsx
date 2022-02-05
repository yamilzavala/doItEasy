import React from "react";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  const idItemDetails = 954;  
  console.log(props);
  return (
    <div>
      <h1>Items List</h1>
      {/* <button onClick={() => props.history.push(`/details/:${idTest}`)}>Go to details of {idTest} item</button> */}
      {/* <Link to={`/details/:${idItemDetails}`}>Go to Details</Link> */}
      <Link to={`/details/:${idItemDetails}`}>Go to Details</Link>
      <br/>
      <Link to='/'>Back home</Link>
    </div>
  );
};

export default ItemList;
