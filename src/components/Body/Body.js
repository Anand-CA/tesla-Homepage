import React from "react";
import "./Body.css";
function Body({ id,title,bgImage }) {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${bgImage})`,
      }}
      className="body"
      id={id}
    >
      <div className="bodyHeader">
            <h1>{title}</h1>
            <p>Order Online for <a href="">Touchless Delivery</a></p>
      </div>
      <div className="bodyFooter">
            <button className="btn-1">Custom order</button><button className="btn-2">Existing inventory</button>
      </div>

    </div>
  );
}

export default Body;
