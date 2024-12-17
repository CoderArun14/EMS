import React from "react";
import Card from "../Card";
//
const CardContainer = () => {
  let myData = [
    {
      imgAdd: "1.jpg",
      time: "4 days ago",
      postCount: "One",
      des: "this isdn uahsdj haskjhdkj sjshdjhkjsdhf",
      footData: [
        {
            textN:  7,
            textT:"Read"
        },
        { 
            textN:3224,
            textT:"View"
        },
        {
            textN:21,
            textT:"Comment"
        }
    ],
      color: "pink",
      bg: "bgRed",
    },
    {
      imgAdd: "2.jpg",
      time: "7 week ago",
      postCount: "Two",
      des: "this isdn uahsdj haskjhdkj sjshdjhkjsdhf",
      footData: [    {
        textN:  11,
        textT:"Read"
    },
    { 
        textN:1699,
        textT:"View"
    },
    {
        textN:27,
        textT:"Comment"
    }
],
      color: "gold",
      bg: "bgGold",
    },
  ];
  return (
    <>
      <div className="container text-center">
        <div className="row">
          {myData.map((singleInfo) => (
            <div className="col-4">
              <Card info={singleInfo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
