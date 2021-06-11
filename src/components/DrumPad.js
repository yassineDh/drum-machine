import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { keyUpPad } from "../redux/actions/action";

function DrumPad(props) {
  const { value, music } = props;
  const [isClicked, setisClicked] = useState(false);
  let isActive = useSelector((state) => state["clicked" + value]);
  let audio = new Audio(`audio/${music}`);
  audio.volume = useSelector((state) => state.volume);

  const displayContent = () => {
    console.log(value);
  };

  const toggleClass = (e) => {
    setisClicked(true);
    audio.play();
    setTimeout(() => {
      setisClicked(false);
    }, 100);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    toggleClass();
    dispatch(keyUpPad(value));
  }, [isActive]);

  return (
    <div className="col-2 p-1" onClick={(e) => toggleClass(e)} id={value}>
      <p
        className={
          isClicked
            ? "drum-pad-style text-center drum-pad-shadow-desable"
            : "drum-pad-style text-center"
        }
      >
        {value}
      </p>
      {/* <audio controls>
        <source
          src={"../audio/"+music}
          type="audio/mpeg"
        ></source>
      </audio> */}
    </div>
  );
}

export default DrumPad;
