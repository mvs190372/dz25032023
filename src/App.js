import './App.css';
import Xy from './components/Xy';
import React, { useEffect, useState } from 'react';
/*const INITIAL_STATE = '';*/

function App() {  

  const [data, setData] = useState({ x: 0, y: 0 });
  const [inObl, setInObl]=useState(true);  

  function mouseMoveHandler(event) {
    setInObl((event.clientX>0) && (event.clientX<500) && (event.clientY>0) && (event.clientY<500));
    if (inObl) setData({ x: event.clientX, y: event.clientY });    
  }

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };    
  });
 
  return (
    <div>
        <Xy data={data}/>      
    </div>
  );  
}

export default App;
