import React, { useState, useRef, useEffect } from "react";
//First useCase
function App() {
  const [name, setName] = useState(" ");
  const [count, renderCount] = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <div className="App">
      {/* <input value={name} setName=(e.target.value)/> */}
      <div>My name is {name}</div>
      <div>I remdered{renderCount.current}</div>
    </div>
  );
}

export default App;
//Other usecase

// import React, {useState, useEffect,useRef} from "react";

// export default function App(){
//   const [name,setName]= useState('');
//   const inpurRef= useRef()

//   function focus(){
//     inputRef.current.focus()
//   }
//   <input ref={inputRef})
//   <div>My name is {name}</div>
// <button onClick={focus}>Focus</button>
