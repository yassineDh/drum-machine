import {
  KEY_DOWN_PAD,
  KEY_UP_PAD,
  CONTROL_VOLUME,
  PLAYLIST_CHOICE,
  DISPLAY_SONG
} from "../types/types";

export const keyDownPad = (data) => {
  return {
    type: KEY_DOWN_PAD,
    payload: data,
  };
};

export const keyUpPad = (data) => {
  return {
    type: KEY_UP_PAD,
    payload: data,
  };
};

export const controlVolume = (data) => {
  return {
    type: CONTROL_VOLUME,
    payload: data,
  };
};

export const playlistChoice = (data) => {
  return {
    type: PLAYLIST_CHOICE,
    payload: data,
  };
};

export const displaySong = (data) => {
  return {
    type: DISPLAY_SONG,
    payload: data,
  };
};
