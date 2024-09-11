import React from "react";
import Typography from "../Typography"
import { Box } from "@mui/material";
export default {
    title: "Components/Foundation/Typography",
    component: Typography
}
const variants = ["body1","body2","button","caption","h1","h2","h3","h4","h5","h6","inherit","overline","subtitle1","subtitle2","buttonLarge","buttonMedium", "buttonSmall"]

const Template = ({args, label}) => (
    variants.map((variant) => (
        <Box>
            <Typography
            {...args}
            variant={variant}
            key={variant}
            >{variant}
            </Typography>
        </Box>
    ))
)

export const TypographyStory = Template.bind({})
