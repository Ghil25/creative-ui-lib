import Icon from "../Icon"
import React from "react"
import Stack from "../../Layout/Stack/Stack"

export default {
    title: "Components/Foundation/Icons",
    component: Icon,
}

const Template = (args) => (
    <Stack direction="row" spacing={2}>
        <Icon {...args}/>
    </Stack>
)

export const Basic = Template.bind({})
Template.args = {
    name: "Home",
    size: 24,
    color: "primary",
    iconStyle: "Outline"
}