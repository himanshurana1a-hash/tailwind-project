import React, { useState } from "react";

function Demo(props) {
  const [name, setName] = useState("himanshu");

  return (
    <div>
      <h2>Name: {props.username}</h2>
      <h3>Age: {props.userAge}</h3>
      <h4>Name: {name}</h4>

      <button className="border border-gray-300 hover:bg-gray-100" onClick={() => setName("Shubham")}>Click me</button>
    </div>
  );
}

export default Demo;