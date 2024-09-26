import DateCalendar from "../../Date Time Picker/Date/DateCalendar/DateCalendar/DateCalendar";
import React from "react";
import ThemeProvider from "../../../../ThemeProvider";

const DateCalendarDemo = () => {
  return (
    <ThemeProvider>
      {" "}
      <DateCalendar sx={{ margin: 0, boxShadow: 5, borderRadius: 2 }} />
    </ThemeProvider>
  );
};

export default DateCalendarDemo;
