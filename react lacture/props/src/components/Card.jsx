import React from "react";
import Head from "./Head";
import ImgContainer from "./ImgContainer";

// const Card = (props) => {
  const Card = ({title,imgAdd,des}) => {
  let {title,imgAdd,des} = props
  return (
    <>
      <div className="card">
        {/* <Head title={props.title} /> */}
        <Head title={title} />
        {/* <ImgContainer imgAdd={props.imgAdd} /> */}
        <ImgContainer imgAdd={imgAdd} />
        {/* <p>{props.des}</p> */}
        <p className="text-danger">{des}</p>
        <div className="btn">
          {" "}
          <button>About Me</button>
        </div>
      </div>
    </>
  );
};

export default Card;
