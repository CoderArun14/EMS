import React from "react";

const Card = ({elm,handleKhushi}) => {
    let {instructions,name,image,id} = elm
  return (
    <>
      <div className="card text-center">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">

          <h5 className="card-title">{name} {id}</h5>
          <p className="card-text">
                {instructions}
          </p>
          <button 
          onClick={()=>handleKhushi(id)}
          className="btn btn-primary">
            Go somewhere
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
