import React from "react";

import Grid from "@mui/material/Grid2";
import DesktopDatePicker from "../../Date Time Picker/Date/DatePicker/DesktopDatePicker/DesktopDatePicker";
import MobileDatePicker from "../../Date Time Picker/Date/DatePicker/MobileDatePicker/MobileDatePicker";
import Typography from "../../../Typography/Typography";
import Stack from "../../../DataDisplay/Avatar/Stack/Stack";
import Icon from "../../../Foundation/Icons/Icon";
import { InputAdornment, IconButton } from "@mui/material";
import dayjs from "dayjs";
import ThemeProvider from "../../../../ThemeProvider";
const DatePickerDemo = () => {
  return (
    <ThemeProvider>
      <Grid
        container
        justifyContent="center"
        spacing={4}
        // columns={{ mobile: 1, tablet: 2 }}
        direction={"row"}
      >
        <Grid item>
          <Stack direction={"column"} spacing={3}>
            <Typography variant={"h5"}>Desktop</Typography>
            <DesktopDatePicker
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
          <Stack direction={"column"} spacing={3}>
            <Typography variant={"h5"}>Mobile</Typography>
            <MobileDatePicker
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
      </Grid>{" "}
    </ThemeProvider>
  );
};

export default DatePickerDemo;
