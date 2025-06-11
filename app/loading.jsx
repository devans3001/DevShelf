import React from "react";
import {
  ClimbingBoxLoader,
  GridLoader,
  HashLoader,
  PacmanLoader,
  RingLoader,
  SyncLoader,
} from "react-spinners";

const DEFAULT_COLOR = "#7E22CE";

const spinnerComponents = [
  ClimbingBoxLoader,
  GridLoader,
  HashLoader,
  PacmanLoader,
  RingLoader,
  SyncLoader,
];

function Loading() {
  const RandomSpinner =
    spinnerComponents[Math.floor(Math.random() * spinnerComponents.length)];

  return (
    <div className="w-full h-[100dvh] bg-background flex justify-center items-center">
      <RandomSpinner color={DEFAULT_COLOR} size={40} />
    </div>
  );
}

export default Loading;
