/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import './App.css';
import  React from "react";
import { useState } from 'react';

function App() {
  return (
  <>
  <ProductCounter />
     <Allpricecard /> 
     </> 
  );
}
 
export default App;
 
function Allpricecard(){
  const data =[
    {
      type : "PRO",
       Price : {
         value: 500,
         style : "abled",
       },
       Storage : {
        value: "50Gb",
        style : "abled",
      },
      Access : {
        value: 100,
        style : "abled",
      },
    },
    {
    type : "Free",
       Price : {
         value: 500,
         style : "abled",
       },
       Storage : {
        value: "50Gb",
        style : "disabled",
      },
      Access : {
        value: 100,
        style : "disabled",
      },
    },
    {
    type : "Plus",
       Price : {
         value: 500,
         style : "abled",
       },
       Storage : {
        value: "50Gb",
        style : "abled",
      },
      Access : {
        value: 100,
        style : "abled",
      },
    },
      {
      type : "PRO",
      Price : {
        value: 500,
        style : "abled",
      },
      Storage : {
       value: "50Gb",
       style : "abled",
     },
     Access : {
       value: 100,
       style : "disabled",
     },
  },
  ]

return (
  <div className='all-cards'>
 {data.map((val,idx) =>(
  <PriceCard  model={val} key={idx}/> 
 ))}

</div>
);
}

function PriceCard( { model }) {
  return (
    <div className='price-card'>
     <p className='type'>{model.type}</p>
     <p className={model.Price.style}>Price : {model.Price.value}</p>
     <p className={model.Storage.style}>Storage : {model.Storage.value}</p>
     <p className={model.Access.style}>Access : {model.Access.value}</p>
     <button>buy</button>
    </div>
  );
}

function ProductCounter(){
  const [count, setCount] = useState(0);
  return (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Add</button>
  </div>
  );
}
 












// return  React.createElement("h1",{ className: "head", id: "h-1" },`JSX ${name}`);
//<>
//<h1>
//<i className="itaclic">JSX {name}</i>
//</h1>
//</>
//<div className = "parent"> hello world </div>