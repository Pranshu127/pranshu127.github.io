import React from "react";
import {robots} from "./robots.js";
import 'tachyons';

   
  const Card =(props)=>{
      const{name,email}=props;
    return (
        <div>
     
      {/* Card */}
      <div className="card">
        {/* Card image */}
        <div className="overlay">
            {/* <img className="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" alt="Card image cap"  width="auto"/> */}
            <img src={`https://robohash.org/${email}?set=set4 `} alt="robot" height="200px"/>
          <a href="#!">
            <div className="mask rgba-white-slight" />
          </a>
        </div>
        {/* Card content */}
        <div className="card-body">
          {/* Title */}
          <h4 className="card-title">{props.id}. {name}</h4>
          {/* Text */}
          <p className="card-text">{email} {/*Some quick example text to build on the card title and make up the bulk of the card's content.*/} </p>
          {/* Button */}<br/>
          <a href="#" className="btn btn-primary">Button</a>
        </div>
      </div>
      {/* Card */}
       
     
</div>

     
    );
}    


export default Card;

