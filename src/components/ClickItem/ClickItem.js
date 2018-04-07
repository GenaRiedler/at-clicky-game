import React from "react";
import "./ClickItem.css";

const ClickItem = props => (
  <div className="card click-item">
    <div 
        className="img-container"
        alt={props.name} 
        onClick={() => props.handleClick(props.id)}
    >
        <img alt={props.name} src={props.image} className="click-img"/>
    </div>
  </div>
);

export default ClickItem;
