import React from "react";
import DesktopTimePicker from "../../Date Time Picker/Time/TimePicker/DesktopTimePicker/DesktopTimePicker";
import MobileTimePicker from "../../Date Time Picker/Time/TimePicker/MobileTimePicker/MobileTimePicker";
import Grid from "@mui/material/Grid2";
import Typography from "../../../Typography/Typography";
import Stack from "../../../DataDisplay/Avatar/Stack/Stack";
import dayjs from "dayjs";
import { InputAdornment, IconButton } from "@mui/material";
import Icon from "../../../Foundation/Icons/Icon";
import ThemeProvider from "../../../../ThemeProvider";
const TimePickerDemo = ({}) => {
  const dialog = <Typography variant="h2"> Hello</Typography>;
  return (
    <ThemeProvider>
      {" "}
      <Grid container spacing={4}>
        <Grid item>
          <Stack spacing={3} direction={"column"}>
            <Typography variant="h5">Desktop</Typography>
            <DesktopTimePicker
              slots={{
                openPickerButton: (props) => (
                  <IconButton {...props}>
                    {" "}
                    <Icon
                      name={"Calendar"}
                      size={20}
                      iconStyle={"BoldDuotone"}
                    />
                  </IconButton>
                ),
              }}
            />
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={3} direction={"column"}>
            <Typography variant="h5">Mobile</Typography>
            <MobileTimePicker
              slotProps={{
                textField: {
                  InputProps: {
                    endAdornment: (
                      <IconButton>
                        {" "}
                        <Icon
                          name={"Calendar"}
                          size={20}
                          iconStyle={"BoldDuotone"}
                        />
                      </IconButton>
                    ),
                  },
                },
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default TimePickerDemo;
