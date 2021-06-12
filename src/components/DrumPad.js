import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { keyUpPad, keyDownPad, displaySong } from "../redux/actions/action";

function DrumPad(props) {
  const { value, music } = props;
  const firstRenderRef = useRef(true);
  let x = document.getElementById(value)
  // const [isClicked, setisClicked] = useState(false);
  let isActive = useSelector((state) => state["clicked" + value]);
  let audio = new Audio(`audio/${music}`);
  audio.volume = useSelector((state) => state.volume);

  const displayContent = () => {
    console.log(value);
  };

  const toggleClass = (e) => {
    dispatch(keyDownPad(value));
    // audio.play();
  };

  const toggleClassUp = () => {
    if (isActive) {
      audio.play();
      x.play();
      dispatch(displaySong(music.split(".")[0]));
    }
    setTimeout(() => {
      dispatch(keyUpPad(value));
      // dispatch(displaySong(""));
    }, 500);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      toggleClassUp();
      console.log("testsssss " + value);
    }

    // dispatch(keyUpPad(value));
  }, [isActive]);

  return (
    <div
      className="col-2 p-1 drum-pad"
      onClick={(e) => toggleClass(e)}
      id={music.split(".")[0]}
    >
      <p
        className={
          isActive
            ? "drum-pad-style text-center drum-pad-shadow-desable"
            : "drum-pad-style text-center"
        }
      >
        {value}
      </p>
      <audio className="clip" src={"audio/" + music} id={value}></audio>
    </div>
  );
}

export default DrumPad;
