
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [count,setCount]=useState(0)

  // if("hello") {return (<h1>Hi double return</h1>)}
  return (
    <div>
        {/* Do not remove the main div */}
        Button clicked {count} times
        <button onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default App
