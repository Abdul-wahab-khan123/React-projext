import React from "react";

const App = () => {
  
  function change(elem) {
    console.log(elem.target.value)
  }

  return (
    <div>
      <input type="text" onChange={change} placeholder="First Name" />
    </div>
  );
};

export default App;