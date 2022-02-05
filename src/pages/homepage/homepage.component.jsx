import React from "react";
import Directory from "../../components/directory/directory.component";
import { Link } from "react-router-dom";

import "./homepage.styles.scss";

const HomePage = (props) => {
  return (
    <div className="homepage">
      {/* <Link to={`/itemlist`}>Go to list items</Link> */}

      <h1>Ecommerce</h1>
      <Directory />
    </div>
  );
};

export default HomePage;
