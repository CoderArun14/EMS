import React from "react";

const Card = ({elm}) => {

    let {thumbnail,title,description} = elm
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={thumbnail} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            {description}
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Card;
