import { Slide as MUISlide } from "@mui/material";
import React from "react";

const Slide = ({
  children,
  addEndListener,
  appear,
  container,
  direction,
  easing,
  isIn,
  timeout,
  ...props
}) => {
  return (
    <>
      <MUISlide
        children={children}
        addEndListener={addEndListener}
        appear={appear}
        container={container}
        direction={direction}
        easing={easing}
        in={isIn}
        timeout={timeout}
        {...props}
      />
    </>
  );
};
export default Slide;
