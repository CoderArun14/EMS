import React from 'react'
import Card from './components/Card'

const App = () => {
  let myData = [
    {
      imgData:"https://wallpapercave.com/wp/wp3978060.jpg",
      days:"4 Days Ago",
      post:"Post One",

      lowerData:[
        {
          textN:7,
          textT:"Reads"
        },
        {
          textN:3224,
          textT:"views"
        },
        {
          textN:21,
          textT:"comments"
        }
      ],

      color:"red",
      bg:"one",

    },
    {
      imgData:"https://wallpaperaccess.com/full/1311185.jpg",
      days:"1 week Ago",
      post:"Post Two",

      lowerData:[
        {
          textN:21,
          textT:"Reads"
        },
        {
          textN:1632,
          textT:"views"
        },
        {
          textN:17,
          textT:"comments"
        }
      ],

      color:"golden",
      bg:"two",

    },
    {
      imgData:"https://staticg.sportskeeda.com/wp-content/uploads/2016/02/kohli-1455891116-800.jpg",
      days:"4 week Ago",
      post:"Post Three",

      lowerData:[
        {
          textN:45,
          textT:"Reads"
        },
        {
          textN:1842,
          textT:"views"
        },
        {
          textN:12,
          textT:"comments"
        }
      ],

      color:"green",
      bg:"three",

    },
    
  ]
  return (
    <>
    <div className="container">
      <div className="row">
        {myData.map((info)=> (
           <div className="col-md-4 text-center">
              <Card info={info}/>
           </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App