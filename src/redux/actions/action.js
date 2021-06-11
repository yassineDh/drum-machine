import { KEY_DOWN_PAD, KEY_UP_PAD, CONTROL_VOLUME } from "../types/types";

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
