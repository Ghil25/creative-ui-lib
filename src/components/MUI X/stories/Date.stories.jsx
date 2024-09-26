import DatePickerDemo from "./components/DatePickerStories";
import TimePickerDemo from "./components/TimePickerStories";
import DateTimePickerDemo from "./components/DateTimePickerStories";
import DateFiledDemo from "./components/DateFieldStories";
import TimeFieldDemo from "./components/TimeFieldStories";
import DateTimeFieldDemo from "./components/DateTimeFieldStories";
import DateCalendarDemo from "./components/DateCalendarStories";
import TimeClockDemo from "./components/TimeClockStories";
import React from "react";

export default {
  title: "Components/MUI_X/DatePicker",
  component: DatePickerDemo,
};

const DatePickerDemos = (args) => <DatePickerDemo {...args} />;
const TimePickerDemos = (args) => <TimePickerDemo {...args} />;
const DateTimePickerDemos = (args) => <DateTimePickerDemo {...args} />;
const DateFieldDemos = (args) => <DateFiledDemo {...args} />;
const TimeFieldDemos = (args) => <TimeFieldDemo {...args} />;
const DateTimeFieldDemos = (args) => <DateTimeFieldDemo {...args} />;
const DateCalendarDemos = (args) => <DateCalendarDemo {...args} />;
const TimeClockDemos = (args) => <TimeClockDemo {...args} />;

export const DatePicker = DatePickerDemos.bind({});
DatePicker.args = {};

export const TimePicker = TimePickerDemos.bind({});
TimePicker.args = {};

export const DateTimePicker = DateTimePickerDemos.bind({});
DateTimePicker.args = {};

export const DateField = DateFieldDemos.bind({});
DateField.args = {};

export const TimeField = TimeFieldDemos.bind({});
TimeField.args = {};

export const DatetimeField = DateTimeFieldDemos.bind({});
DatetimeField.args = {};

export const DateCalendar = DateCalendarDemos.bind({});
DateCalendar.args = {};

export const TimeClock = TimeClockDemos.bind({});
TimeClock.args = {};
