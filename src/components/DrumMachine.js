import React from "react";
import ControlDisplay from "./ControlDisplay";
import Display from "./Display";

function DrumMachine() {
  return (
    <div className="col-8 mx-auto border border-secondary" id="drum-machine">
      <div className="container-fluid">
        <div className="row">
          <Display />
          <ControlDisplay />
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;
