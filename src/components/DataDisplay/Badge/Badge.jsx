import React from "react";
import * as SolarIconSet from "solar-icon-set";  
import PropTypes from "prop-types";
import { Badge as NMSBadge, Stack, Avatar } from "@mui/material";
import {styled} from '@mui/material/styles'
import ThemeProvider from "../../../ThemeProvider"


const Badge = ({ direction, name = "Letter", size, iconStyle, color, variant, badgeContent,overlap,Badgesx,Iconsx,badgeColor, max, badges = [], sx,spacing, isStyledBadge = false,alt, src,anchorOrigin,  ...props }) => {
  const IconComponent = SolarIconSet[name];

  const StyledBadge = styled(NMSBadge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: {color},
      color: {color},
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));  
  



  if (!IconComponent) {
    console.error(`Icon "${name}" not found in SolarIconSet.`);
    return null;
  }

  return ( <ThemeProvider>
    { isStyledBadge ? <Stack direction={direction} spacing={spacing}>
    {badges.map((badgeProp)=>{
      return     <StyledBadge {...props} variant={badgeProp.variant || variant}  overlap={badgeProp.overlap || overlap} anchorOrigin={badgeProp.anchorOrigin || anchorOrigin} sx={badgeProp.sx || sx} color={badgeProp.color || color}>
      <Avatar alt={badgeProp.alt || alt} src={badgeProp.src || src}/>
       </StyledBadge>
    })}

  </Stack> : 
    <Stack direction={direction} spacing={spacing}>
      {badges.map((badgeProp) => {
   return <NMSBadge {...props} variant={badgeProp.variant || variant} max={badgeProp.max || max} color={badgeProp.color || color} sx={badgeProp.Badgesx || Badgesx} badgeContent={badgeProp.badgeContent || badgeContent} overlap={badgeProp.overlap || overlap}>
      <IconComponent size={badgeProp.size || size}  iconStyle={badgeProp.iconStyle || iconStyle}  sx={badgeProp.Iconsx || Iconsx}/>
    </NMSBadge>
    })}  
    </Stack>   }
  </ThemeProvider> 
  );
};



















Badge.propTypes = {
  
      avatars: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
      
        badgeContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        iconStyle: PropTypes.oneOf(["Bold", "BoldDuotone", "Outline"]),
       color: PropTypes.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]),
        badgecolor:  PropTypes.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]),
        overlap: PropTypes.string,
        sx: PropTypes.oneOfType([
            PropTypes.arrayOf(
              PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
            ),
            PropTypes.func,
            PropTypes.object,
            PropTypes.bool,
          ]),
          Badgesx: PropTypes.oneOfType([
            PropTypes.arrayOf(
              PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
            ),
            PropTypes.func,
            PropTypes.object,
            PropTypes.bool,
          ]),
          Iconsx: PropTypes.oneOfType([
            PropTypes.arrayOf(
              PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
            ),
            PropTypes.func,
            PropTypes.object,
            PropTypes.bool,
          ]),
          size: PropTypes.number,   
       })),

       direction: PropTypes.string,
       spacing: PropTypes.number,
       variant: PropTypes.string,
       isStyledBadge: PropTypes.bool,
       alt: PropTypes.string,
       src: PropTypes.string,
       anchorOrigin: PropTypes.shape({
        vertical : PropTypes.oneOfType("top", "bottom"),
        horizontal: PropTypes.oneOfType("left", "right")
    
    })

}

export default Badge;