import React from "react"
import PropTypes from "prop-types"
import ThemeProvider from "../../../ThemeProvider"
import {Box, List as NMSList ,ListItem, ListItemButton, ListItemIcon,ListItemText, Divider, ListItemAvatar, Icon} from "@mui/material"
import * as SolarIconSet from "solar-icon-set";
import InboxIcon from '@mui/icons-material/Inbox';
import ExpandMore from '@mui/icons-material/Expandmore'

const List = ({
    sx,listItems = [], primary,disablepadding = false, component, href,secondname, selected, size,iconStyle, color,name, width, maxWidth, ...props
})=>{

   
  

    return <ThemeProvider><Box sx={{width, maxWidth, ...sx}}>
    <NMSList {...props}> 
       {
             listItems.map((listIItemProp)=>{
                const PrimaryIconx`x` = SolarIconSet[name];
                const DrawerComponent = SolarIconSet[secondname];
            
                if (!IconComponent) {
                    console.error(`Icon "${name}" not found in SolarIconSet.`);
                    return null;
                  }
  
               return <ListItem disablepadding={listIItemProp.disablepadding || disablepadding }>
                   <ListItemButton selected={listIItemProp.selected || selected}>
                       <ListItemIcon>
                       <IconComponent sx={listIItemProp.sx || sx} size={listIItemProp.size || size} iconStyle={listIItemProp.iconStyle || iconStyle} color={listIItemProp.color || color}/>
                  
                       <ListItemAvatar /> 
                       </ListItemIcon>
                       <ListItemText primary={listIItemProp.primary || primary} />
                       <DrawerComponent sx={listIItemProp.sx || sx} size={listIItemProp.size || size} iconStyle={listIItemProp.iconStyle || iconStyle} color={listIItemProp.color || color}/>

                    
                   </ListItemButton>
               </ListItem>
             })
       }
   </NMSList>
   <Divider />  
</Box> </ThemeProvider> 
}

export default List;


List.propTypes = {
    
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
        PropTypes.shape({
            width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
          PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
        ),
        PropTypes.func,
        PropTypes.object,
        PropTypes.bool,
      ]),
    name: PropTypes.string,
    secondname: PropTypes.string,

   

            listItems: PropTypes.arrayOf( PropTypes.shape({
                size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iconStyle: PropTypes.oneOf(["Bold", "BoldDuotone", "Outline"]),
    disablepadding: PropTypes.bool,
    // color: PropTypes.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]),
    color: PropTypes.string,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
        ),
        PropTypes.func,
        PropTypes.object,
        PropTypes.bool,
      ]),
    

                })
            )
}


