import React from "react";

// type Props = {
//   onChange: (gwei: number) => number,
//   value: number,
//   updateMessage: (gwei: number) => number,
// }

const Body = (props: any) => {
  return (
    <div id="body">
      <form action="" className="input-gwei">
        <label htmlFor="gwei">Type Gwei:</label>
        <input 
          id="gwei" 
          type="number" 
          placeholder="value" 
          // value={props.value}
          onChange={(event) => props.updateMessage(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Body;
