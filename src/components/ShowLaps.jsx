import React from "react";

const ShowLaps = (props) => {
    return (
      <p className="laps">
        <span >{props.laps}</span><br />
        Laps
      </p>
    );
  };

  export default ShowLaps;
