import React from "react"
import List from "../List"

export default {
    title: "Components/DataDisplay/List",
    component: List
}
const Template = (args) => <List {...args} />

export const BasicList = Template.bind({});
BasicList.args = {
    name: "Letter",
    secondname: "AltArrowDown",
    sx: {
        border: "1px solid gray",
        width: '100%',
        maxWidth: '100%'
        },
    listItems: [
        {
            disablepadding : true,
            primary: "first inbox",
            color: 'primary',
            size: 40,
            iconStyle: "BoldDuotone",
          
            sx: {

            }
            
        },
        {
            disablepadding : true,
            primary: "first inbox",
            color: 'red',
            size: 40,
            iconStyle: "BoldDuotone",

            sx: {
                color: "red"
            }
            
        },
        {
            disablepadding : true,
            primary: "Inbox",
            color: 'red',
            size: 40,
            iconStyle: "BoldDuotone",

            sx: {
                color: "red"
            }
            
        },
        {
            disablepadding : true,
            primary: "Spam",
            color: 'red',
            size: 40,
            iconStyle: "BoldDuotone",

            sx: {
                color: "red"
            }
            
        },
    ]
}
