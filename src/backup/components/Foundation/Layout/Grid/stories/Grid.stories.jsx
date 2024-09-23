import React from "react";
import Grid from "../Grid";
import Box from "../../Box/Box";

export default {
    title: "Components/Foundation/Layout/Grid",
    component: Grid,
}
const Template = ({args, itemGrid1Args, itemGrid2Args, itemGrid1Label, itemGrid2Label}) => (
    <Grid {...args}>
        <Grid {...itemGrid1Args}>
            <Box sx={{ display: "flex", justifyContent: "center", p: 2, border: "1px solid gray", borderradius: 2 }}>{itemGrid1Label}</Box>
        </Grid>
        <Grid {...itemGrid2Args}>
            <Box sx={{ display: "flex", justifyContent: "center", p: 2, border: "1px solid gray", borderradius: 2 }}>{itemGrid2Label}</Box>
        </Grid>
    </Grid>
)

export const Basic = Template.bind({})
Basic.args = {
    args: {
        spacing: 2,
        container: true
    },
    itemGrid1Args: {
        size: 8
    },
    itemGrid2Args: {
        size: 4
    },
    itemGrid1Label: "Size=8",
    itemGrid2Label: "Size=4"
}


export const Fluid = Template.bind({})
Fluid.args = {
    args: {
        spacing: 2,
        container: true
    },
    itemGrid1Args: {
        size: {
            xs: 6,
            md: 8
        }
    },
    itemGrid2Args: {
        size: {
            xs: 6,
            md: 4
        }
    },
    itemGrid1Label: "xs=6 md=8",
    itemGrid2Label: "xs=6 md=4"
}