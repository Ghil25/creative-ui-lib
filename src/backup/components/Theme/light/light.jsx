import { createTheme } from "@mui/material";
import {colors} from "./theme-variables/colors"
import "@fontsource/lato";
import { Typography } from "./theme-variables/Typography";
import { breakpoints } from "./theme-variables/breakpoints";
import { componentsOverrides } from "./theme-variables/componentOverrides";

const light = createTheme({
    palette: colors,
    typography: Typography,
    // breakpoints: breakpoints,
    components: componentsOverrides
})

export default light;