import { Slide as MUISlide } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const Slide = ({
  children,
  classes,
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
    <MUISlide
      children={children}
      addEndListener={addEndListener}
      appear={appear}
      container={container}
      direction={direction}
      easing={easing}
      in={isIn}
      timeout={timeout}
      classes={classes}
      {...props}
    />
  );
};

Slide.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  addEndListener: PropTypes.func,
  appear: PropTypes.bool,
  container: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(Element),
  ]),
  direction: PropTypes.oneOf(["left", "right", "up", "down"]),
  easing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      enter: PropTypes.string,
      exit: PropTypes.string,
    }),
  ]),
  isIn: PropTypes.bool,
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      enter: PropTypes.number,
      exit: PropTypes.number,
    }),
  ]),
};

export default Slide;
