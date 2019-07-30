import React from "react";

function userInput(props) {
  const styleUserInput = {
    padding: "8px 12px",
    marginBottom: "20px"
  };

  return (
    <div>
      <input style={styleUserInput} type="text" onChange={props.changed} />
    </div>
  );
}

export default userInput;
