import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { controlVolume } from "../redux/actions/action";

function ControlDisplay() {
  const dispatch = useDispatch();

  return (
    <div className="col-4">
      <input
        type="range"
        min="0"
        max="10"
        value={useSelector((state) => state.volume*10)}
        onChange={(e) => {
          dispatch(controlVolume(e.target.value / 10));
        }}
      />

     <div>
         <input type="radio" name="switchMusic"  value="first"/>
         <input type="radio" name="switchMusic"  value="second"/>
     </div>
    </div>
  );
}

export default ControlDisplay;
