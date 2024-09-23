import React from "react";
import Container from "../Container"
import Box from "../../Box/Box";
export default {
    title: "Components/Foundation/Layout/Container",
    component: Container,
}

const Template = (args) => (
    <Container {...args}>
        <Box sx={{ bgcolor: "#FF4545", height: "50vh"}}>This is a Container</Box>
    </Container>
)

export const Fluid = Template.bind({})
Fluid.args = {
    maxWidth: "fluid",
    sx: {
        border: "1px solid red",
        p: 4
    }
}