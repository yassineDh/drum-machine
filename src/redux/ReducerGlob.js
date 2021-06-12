import {
  KEY_DOWN_PAD,
  KEY_UP_PAD,
  CONTROL_VOLUME,
  PLAYLIST_CHOICE,
  DISPLAY_SONG,
} from "./types/types";

const initialState = {
  clickedQ: false,
  clickedW: false,
  clickedE: false,
  clickedA: false,
  clickedS: false,
  clickedD: false,
  clickedZ: false,
  clickedX: false,
  clickedC: false,
  volume: 0.5,
  playList: "first",
  songName: "",
};

const editorReducer = (state = initialState, action) => {
  const newVal = "clicked" + action.payload;
  switch (action.type) {
    case KEY_DOWN_PAD:
      return { ...state, [newVal]: true };
    case KEY_UP_PAD:
      return { ...state, [newVal]: false };
    case CONTROL_VOLUME:
      return { ...state, volume: action.payload };
    case PLAYLIST_CHOICE:
      return { ...state, playList: action.payload };
    case DISPLAY_SONG:
      return { ...state, songName: action.payload };
    default:
      return state;
  }
};

export default editorReducer;
