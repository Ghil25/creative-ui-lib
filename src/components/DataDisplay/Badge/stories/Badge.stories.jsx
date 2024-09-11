import React from "react"
import Badge from "../Badge"


export default {
    title: "Components/DataDisplay/Badge",
    component: Badge
}

const Template = (args) => <Badge {...args} />

export const BasicBadge = Template.bind({});
BasicBadge.args = {
    name: "Letter",
    direction: 'row',
    badges : [{
    color: "secondary",
    iconStyle: "Bold",
    size: 24,
    color: "primary",
    badgeContent: 5,
    Iconsx: {
       color: "secondary.main"
    },
    Badgesx: {
        color: "secondary.main"
    }

}]
}

export const MaximumBadge = Template.bind({});
MaximumBadge.args = {
    direction: 'row',
    name: "Letter",
    spacing: 2,
    badges: [
        {
            iconStyle: "Bold",
            size: 24,
            color: "secondary",
            Badgesx: {
                color: 'red'
            },
            Iconsx: {
                color: "yellow"
            },  
            name: "Letter",
            badgeContent: 99,
      
        
        },
        {
            iconStyle: "Bold",
            size:24,
            color: "secondary",
            Badgesx: {
                color: 'red'
            },
            Iconsx: {
                color: "yellow"
            },  
            name: "Letter",
            badgeContent: 100,
      
            max: 99
        
        },
        {
            iconStyle: "Bold",
            size: 24,
            color: "secondary",
            Badgesx: {
                color: 'red'
            },
            Iconsx: {
                color: "yellow"
            },  
            name: "Letter",
            badgeContent: 1000,
      
            max: 999
        
        },
    ]
}

export const OverlapBadge = Template.bind({});
OverlapBadge.args = {
    direction: 'row',
    spacing: 2,
    name: "Home",
    badges: [
        {
            iconStyle: "Bold",
            size: 24,
            color: "primary",
            Badgesx: {
                color: 'red'
            },
            Iconsx: {
                color: "yellow"
            },  

            variant: "dot",
            overlap: "circular"     
        },
        {
            iconStyle: "Bold",
            size: 24,
            color: "primary",
            Badgesx: {
                color: 'red'
            },
            Iconsx: {
                color: "yellow"
            },  
            variant: "dot",
            overlap: "circular"     
        },
        {
            iconStyle: "Bold",
            size: 24,
            color: "primary",
            Badgesx: {
                color: 'red'
            },
            Iconsx: {
                color: "yellow"
            },  
            variant: "dot",
            overlap: "circular"     
        },
    
    ]
}

export const ColorBadge = Template.bind({});
ColorBadge.args = {
  
    name: "Letter",
    direction: 'row',
    spacing: 2,
    badges : [{
    color: "secondary",
    iconStyle: "Bold",
    size: 24,
    color: "primary",
    badgeContent: 5,
    Badgesx: {
        color: "primary.main"
    }

},{
    color: "secondary",
    iconStyle: "Bold",
    size: 24,

    badgeContent: 5,
    Iconsx: {
       color: "secondary.main"
    },
    Badgesx: {
        color: "secondary.main"
    }

},
{
    color: "success",
    iconStyle: "Bold",
    size: 24,

    badgeContent: 5,
    Badgesx: {
        color: "success.main"
    }

},
{
    color: "secondary",
    iconStyle: "Bold",
    size: 24,
    color: "warning",
    badgeContent: 5,
    Badgesx: {
        color: "warning.main"
    }

},
{
    color: "secondary",
    iconStyle: "Bold",
    size: 24,
    color: "error",
    badgeContent: 5,
    Badgesx: {
        color: "error.main"
    }

}]
}

export const DotBadge = Template.bind({});
DotBadge.args = {
  
    name: "Letter",
    direction: 'row',
    spacing: 2,
    badges : [{
    color: "secondary",
    iconStyle: "Bold",
    size: 24,
    color: "primary",
    variant: 'dot',
    badgeContent: '',
    Badgesx: {
        color: "primary.main"
    }

},{
    color: "secondary",
    iconStyle: "Bold",
    size: 24,

    variant: 'dot',
    badgeContent: '',
    Iconsx: {
       color: "secondary.main"
    },
    Badgesx: {
        color: "secondary.main"
    }

},
{
    color: "success",
    iconStyle: "Bold",
    size: 24,

    variant: 'dot',
    badgeContent: '',
    Badgesx: {
        color: "success.main"
    }

},
{
    color: "secondary",
    iconStyle: "Bold",
    size: 24,
    color: "warning",
    variant: 'dot',
    badgeContent: '',
    Badgesx: {
        color: "warning.main"
    }

},
{
    color: "secondary",
    iconStyle: "Bold",
    size: 24,
    color: "error",
    variant: 'dot',
    badgeContent: '',
    Badgesx: {
        color: "error.main"
    }

}]
}

export const StatusBadge = Template.bind({});
StatusBadge.args = {
    isStyledBadge: true,
    direction: 'row',
    spacing: 0,
    badges : [{
    color: "error",
    variant: 'dot',
    overlap: "circular",
    src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
    alt: 'Sample',
    anchorOrigin : {
        vertical: "bottom",
        horizontal: "right"
    },},
    {
        color: "success",
        variant: 'dot',
        overlap: "circular",
        src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
        alt: 'Sample',
        anchorOrigin : {
            vertical: "bottom",
            horizontal: "right"
        },},
        {
            color: "warning",
            variant: 'dot',
            overlap: "circular",
            src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
            alt: 'Sample',
            anchorOrigin : {
                vertical: "bottom",
                horizontal: "right"
            },},
]
}