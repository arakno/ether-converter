import React from "react";

type Props = {
  onChange: () => void,
  value: number,
  updateMessage: () => number,
}

const Body = (props: any) => {
  return (
    <div id="body">
      <p>BODY VAL: {props.value}</p>
      <input 
        id="gwei" 
        type="number" 
        placeholder="gwei value" 
        // value={props.value}
        onChange={(event) => props.updateMessage(event.target.value)}
      />
    </div>
  );
};

export default Body;
