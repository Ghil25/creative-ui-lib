import React from "react";
import Box from "../Box";
export default {
    title: "Components/Foundation/Layout/Box",
    component: Box
}

const Template = (args) => <Box {...args} >This is a Box</Box>

export const Basic = Template.bind({})
Basic.args = {
    sx: {
        p: 2, 
        border: "1px dashed grey", 
        textAlign: "center"
    },
};

export const Customed = Template.bind({})
Customed.args = {
    height: 200,
    width: 200,
    my: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    p: 2,
    sx: {
        border: "2px solid grey"    
    }
}

export const SxProp = Template.bind({})
SxProp.args = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    sx: {
        width: 100,
        height: 100,
        borderRadius: 1,
        bgcolor: 'primary.main',
        '&:hover': {
            bgcolor: 'primary.dark',
          },
    }
}