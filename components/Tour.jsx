import React, { useState } from "react";
import "../Styles/Tour.css";
function Tour({ state, onDelete }) {
  const [Readmore, setReadmore] = useState(true);
  const { id, name, info, image, price, loading } = state;
  const Handledelete = (id) => {
    onDelete(id);
  };

  return (
    <div className="main">
      <img src={image} alt="" className="img-tour" />
      <div className="context">
        <div className="NamePrice">
          <span className="Name">{name}</span>
          <span className="price">{price}$</span>{" "}
        </div>
        <div>
          <span className="info">
            {" "}
            {Readmore ? `${info.substring(0, 200)} ...` : info}
            <button onClick={() => setReadmore(!Readmore)}>
              {Readmore ? "show more" : "show less"}
            </button>
          </span>{" "}
          <div>
            <button onClick={() => Handledelete(id)} className="Btn-remove">
              Not Interested
            </button>{" "}
          </div>
        </div>
        {loading && "loading.."}
      </div>
    </div>
  );
}
export default Tour;
