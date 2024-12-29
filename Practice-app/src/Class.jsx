import React from "react" 
class ClassName extends React.Component{
  constructor(){
    super()
   
  const apiUrl = "https://67409db7d0b59228b7f0b79f.mockapi.io/crud/crudAPP";
  

fetch(apiUrl)
.then(response => {
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
console.log(data);
})
.catch(error => {
console.error('Error:', error);
})
this.state={
  name:this.state
} 
  }
  render(){
    return <h1></h1>
  }
}
export default ClassName