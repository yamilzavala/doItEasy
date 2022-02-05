import React from "react";
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom'

//this component receives (by props) the url of the target category list 
//clicking on the category, redirect to list of products of the target category

const MenuItem = ({title, imageUrl, size, history, linkUrl}) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${linkUrl}`)}>
    <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
