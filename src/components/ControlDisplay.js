import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { controlVolume, playlistChoice } from "../redux/actions/action";

function ControlDisplay() {
  const dispatch = useDispatch();

  const handlePlaylistChange = (e) => {
    console.log(e.target.value);
    dispatch(playlistChoice(e.target.value));
  };

  return (
    <div className="col-4">
      <input
        type="range"
        min="0"
        max="10"
        value={useSelector((state) => state.volume * 10)}
        onChange={(e) => {
          dispatch(controlVolume(e.target.value / 10));
        }}
      />

      <div onChange={handlePlaylistChange}>
        <input
          type="radio"
          name="switchMusic"
          value="first"
          checked={useSelector((state) => state.playList) == "first"}
        />{" "}
        First
        <input
          type="radio"
          name="switchMusic"
          value="second"
          checked={useSelector((state) => state.playList) == "second"}
        />{" "}
        Second
      </div>

      <div id="display">{useSelector((state) => state.songName)}</div>
    </div>
  );
}

export default ControlDisplay;
