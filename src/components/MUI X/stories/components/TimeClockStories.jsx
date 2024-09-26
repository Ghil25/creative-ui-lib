import TimeClock from "../../Date Time Picker/Time/TimeClock/TimeClock";
import React from "react";
import ThemeProvider from "../../../../ThemeProvider";

const TimeClockDemo = () => {
  return (
    <ThemeProvider>
      {" "}
      <TimeClock sx={{ margin: 0, boxShadow: 5, borderRadius: 2 }} />
    </ThemeProvider>
  );
};

export default TimeClockDemo;
