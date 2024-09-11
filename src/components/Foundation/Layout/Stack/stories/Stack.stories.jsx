import React from "react";
import Box from "../../Box/Box";
import Stack from "../Stack";
export default {
    title: "Components/Foundation/Layout/Stack",
    component: Stack
}

const Template = ({args, itemLabel1, itemLabel2, itemLabel3}) => (
    <Stack {...args}>
        <Box sx={{ border: "1px solid gray", p: 2}}>{itemLabel1}</Box>
        <Box sx={{ border: "1px solid gray", p: 2}}>{itemLabel2}</Box>
        <Box sx={{ border: "1px solid gray", p: 2}}>{itemLabel3}</Box>
    </Stack>
)

export const Basic = Template.bind({})
Basic.args = {
    args: {
        direction: "row",
        spacing: 2
    },
    itemLabel1: "Item 1",
    itemLabel2: "Item 2",
    itemLabel3: "Item 3"
}

export const Column = Template.bind({})
Column.args = {
    args: {
        direction: "column",
        spacing: 2
    },
    itemLabel1: "Item 1",
    itemLabel2: "Item 2",
    itemLabel3: "Item 3"
}

export const Responsive = Template.bind({})
Responsive.args = {
    args: {
        direction: {
            xs: 'column',
            sm: 'row'
        },
        spacing: {
            xs: 1,
            sm: 2,
            md: 4
        }
    },
    itemLabel1: "Item 1",
    itemLabel2: "Item 2",
    itemLabel3: "Item 3"
}

export const FlexboxGap = Template.bind({})
FlexboxGap.args = {
    args: {
        direction: "row",
        spacing: 2,
        useFlexGap: true,
        flexWrap: "wrap"
    },
    itemLabel1: "Item 1",
    itemLabel2: "Item 2",
    itemLabel3: "Long Content"
}