import React, { useState, useEffect } from "react";
import DrumPad from "./DrumPad";
import { useDispatch, useSelector } from "react-redux";
import { keyDownPad } from "../redux/actions/action";

function Display() {
  

  const arrayId = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const Playlist = {
    first: [
      "mixkit-cool-guitar-riff-2321.mp3",
      "mixkit-deep-horror-drum-556.mp3",
      "mixkit-drum-bass-hit-2294.mp3",
      "mixkit-drum-joke-accent-579.mp3",
      "mixkit-funny-cartoon-tones-2892.mp3",
      "mixkit-futuristic-bass-hit-2303.mp3",
      "mixkit-guitar-notification-alert-2320.mp3",
      "mixkit-guitar-stroke-up-2328.mp3",
      "mixkit-hand-tribal-drum-562.mp3",
    ],
    second: [
      "mixkit-happy-guitar-chords-2319.mp3",
      "mixkit-joke-drums-578.mp3",
      "mixkit-negative-guitar-tone-2324.mp3",
      "mixkit-negative-tone-interface-tap-2569.mp3",
      "mixkit-quick-guitar-tone-2323.mp3",
      "mixkit-short-bass-hit-2299.mp3",
      "mixkit-short-guitar-strum-2318.mp3",
      "mixkit-toy-drums-and-bell-ding-560.mp3",
      "mixkit-tribal-dry-drum-558.mp3",
    ],
  };
  const dispatch = useDispatch();

  const toggleClasskey = (e) => {
    for (let i = 0; i < arrayId.length; i++) {
      if (e.key === arrayId[i].toLowerCase() || e.key === arrayId[i]) {
        console.log("pressed " + arrayId[i]);
        dispatch(keyDownPad(arrayId[i]));
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", toggleClasskey, false);

    return () => {
      document.removeEventListener("keyup", toggleClasskey, false);
    };
  }, []);

  return (
    <div id="display" className="col-8">
     
      <div className="container-fluid">
        <div className="row">
          {arrayId.map((elt, i) => {
            if ((i + 1) % 3 == 0) {
              return (
                <React.Fragment>
                  <DrumPad key={elt} value={elt} music={Playlist.first[i]} />
                  <div className="w-100"></div>
                </React.Fragment>
              );
            }
            return <DrumPad key={elt} value={elt} music={Playlist.first[i]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Display;
