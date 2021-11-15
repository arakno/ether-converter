import React from "react";

// type Props = {
//   onChange: (gwei: number) => number,
//   value: number,
//   updateMessage: (gwei: number) => number,
// }

const Body = (props: any) => {
  return (
    <div id="body">
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
