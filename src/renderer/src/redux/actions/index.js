import utils from "../utils.js";
export * from "./conditions.js";
export * from "./examples.js";
export * from "./mechanism.js";
export * from "./run.js";
export * from "./plots.js";
export * from "./cookies.js";
export * from "./flow.js";

export const resetAll = (content) => {
  return {
    type: utils.action_types.RESET_ALL,
    payload: {},
  };
};

export const resetPlots = (content) => {
  return {
    type: utils.action_types.RESET_PLOTS,
    payload: {},
  };
};
