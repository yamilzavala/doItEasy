import React from "react";
import "./details.styles.scss";
import { Link } from "react-router-dom";

/*Add to Route: 
    <Route  path='/details/:itemId' component={Details} />
*/

const Details = (props) => {
  console.log(props);
  return (
    <div>
      {/* <button onClick={() => props.history.goBack()}>Go to home</button> */}    
      <h1>Details Page</h1>
      <b>Id by url:</b> {props.match.params.itemId}
    </div>
  );
};

export default Details;
