import React from "react";
import Grid from "../../../Foundation/Layout/Grid/Grid";
import Typography from "../../../Foundation/Typography/Typography";
import Stack from "../../../Foundation/Layout/Stack/Stack";
import dayjs from "dayjs";
import { InputAdornment, IconButton } from "@mui/material";
import Icon from "../../../Foundation/Icons/Icon";
import ThemeProvider from "../../../../ThemeProvider";

import DesktopDateTimePicker from "../../Date Time Picker/DateTime/DateTimePicker/DesktopDateTimePicker/DesktopDateTimePicker";
import MobileDateTimePicker from "../../Date Time Picker/DateTime/DateTimePicker/MobileDateTimePicker/MobileDateTimePicker";

const DateTimePickerDemo = ({}) => {
  const dialog = <Typography variant="h2"> Hello</Typography>;
  return (
    <ThemeProvider>
      {" "}
      <Grid container spacing={4}>
        <Grid item>
          <Stack spacing={3} direction={"column"}>
            <Typography variant="h5">Desktop</Typography>
            <DesktopDateTimePicker
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
            <MobileDateTimePicker
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

export default DateTimePickerDemo;
