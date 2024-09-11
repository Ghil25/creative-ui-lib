import React from "react";
import { Stack, Avatar as NMSAvatar, AvatarGroup, Badge } from "@mui/material";
import PropTypes from "prop-types";
import ThemeProvider from "../../../ThemeProvider"


const Avatar = ({
  alt,
  spacing,
  children,
  component,
  imgProps,
  src,
  variant,
  direction,
  sizes , 
  max,
  avatars = [],
  total,
  useAvatarGroup = false,
  useBadge = false,
  badgeVariant,
  color,
  overlap, anchorOrigin, badgeContent, vertical, horizontal,
  sx,

  ...props
}) => {
  return (<ThemeProvider>{useAvatarGroup ? <AvatarGroup max={max} total={total} sx={{ ...sx }}>
    {avatars.map((avatarProp) =>  <NMSAvatar
        
        alt={avatarProp.alt || alt}
  
       
        src={avatarProp.src || src}
        sx={{
          ...sizes, 
          ...avatarProp.sizes,
          ...avatarProp.sx,
          ...sx,  
        }}
        variant={avatarProp.variant || variant}
        {...props}
      >
        {avatarProp.children || children}
      </NMSAvatar>
     )}
  
    </AvatarGroup>
    :
      <Stack component="Stack" direction={direction} spacing={spacing}>
      {avatars.map((avatarProp) => (avatarProp.useBadge ?   <Badge color={avatarProp.color || color} variant={avatarProp.badgeVariant || badgeVariant} overlap={avatarProp.overlap || overlap} anchorOrigin={avatarProp.anchorOrigin || anchorOrigin} badgeContent={avatarProp.badgeContent || badgeContent}> 
         <NMSAvatar
        
        alt={avatarProp.alt || alt}
       
        src={avatarProp.src || src}
        sx={{
          ...sizes, 
          ...avatarProp.sizes,
          ...avatarProp.sx,
          ...sx,  
        }}
        variant={avatarProp.variant || variant}
        {...props}
      >
        {avatarProp.children || children}
      </NMSAvatar>
      </Badge> : <NMSAvatar
        
        alt={avatarProp.alt || alt}
       
        src={avatarProp.src || src}
        sx={{
          ...sizes, 
          ...avatarProp.sizes,
          ...avatarProp.sx,
          ...sx,  
        }}
        variant={avatarProp.variant || variant}
        {...props}
      >
        {avatarProp.children || children}
      </NMSAvatar> 
     
     ))}
      </Stack> }</ThemeProvider> 
  );
};


Avatar.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
  imgProps: PropTypes.object,
  src: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(["circular", "rounded", "square"]),
    PropTypes.string,
  ]),
  direction: PropTypes.string,
  spacing: PropTypes.number,

  avatars: PropTypes.arrayOf(PropTypes.shape({
    sizes: PropTypes.object,  
    alt: PropTypes.string,
    src: PropTypes.string,
    sx: PropTypes.object,
    variant: PropTypes.oneOf(["circular", "rounded", "square"]),
    children: PropTypes.node,
    component: PropTypes.string,
  max: PropTypes.number,
  useAvatarGroup: PropTypes.bool,
  total: PropTypes.number,
  overlap: PropTypes.string,
  useBadge: PropTypes.bool,
  color: PropTypes.string,
  anchorOrigin: PropTypes.object,
  badgeVariant: PropTypes.string,
  badgeContent: PropTypes.string,
  anchorOrigin: PropTypes.shape({
    vertical : PropTypes.oneOfType("top", "bottom"),
    horizontal: PropTypes.oneOfType("left", "right")

})
  })),
  
};

export default Avatar;