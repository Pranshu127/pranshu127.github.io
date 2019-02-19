import React from 'react';
import "./card.css";

class Card2 extends React.Component
{
    render(){
        return(
        <div>
                        {/* Card */}
            <div className="card promoting-card">
              {/* Card content */}
              <div className="card-body d-flex flex-row">
                {/* Avatar */}
                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" className="rounded-circle mr-3" height="50px" width="50px" alt="avatar" />
                {/* Content */}
                <div>
                  {/* Title */}
                  <h4 className="card-title font-weight-bold mb-2">New spicy meals</h4>
                  {/* Subtitle */}
                  <p className="card-text"><i className="far fa-clock pr-2" />07/24/2018</p>
                </div>
              </div>
              {/* Card image */}
              <div className="view overlay">
                <img className="card-img-top rounded-0" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg" alt="Card image cap" />
                <a href="#!">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              {/* Card content */}
              <div className="card-body">
                <div className="collapse-content">
                  {/* Text */}
                  <p className="card-text collapse" id="collapseContent">Recently, we added several exotic new dishes to the menu of our restaurant. They come from countries such as Mexico, Argentina, and Spain. Come to us, have a delicious wine and enjoy the juicy meals from around the world.</p>
                  {/* Button */}
                  <a className="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed" data-toggle="collapse" href="#collapseContent" aria-expanded="false" aria-controls="collapseContent" />
                  <i className="fas fa-share-alt text-muted float-right p-1 my-1" data-toggle="tooltip" data-placement="top" title="Share this post" />
                  <i className="fas fa-heart text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it" />
                </div>
              </div>
            </div>
            {/* Card */}
    
        </div>
        );
    }
}
      
export default Card2;