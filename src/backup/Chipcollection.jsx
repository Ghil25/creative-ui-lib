// import React from "react"
// import {Chip as NMSChip, Stack} from "@mui/material"
// import PropTypes from "prop-types"
// import ThemeProvider from "../../../ThemeProvider"

// const handleDelete = () => {
//   console.info('You clicked the delete icon.');
// };
// const Chip = ({
//         chips = [],
//         label,
//         direction,
//         spacing,
//         variant,
//         disabled = false,
//         clickable = false,
//         color,
//         sx,
//         onDelete,
//         component,
//         href,
//         avatar,
//         icon,
//         size,
//         ...props
// })=> {

//     return (<ThemeProvider>{
//         <Stack direction={direction} spacing={spacing}>
//         {chips.map((chipProp) => <NMSChip {...props} label={chipProp.label || label} variant={chipProp.variant || variant} disabled={chipProp.disabled || disabled} clickable={chipProp.clickable || clickable} color={chipProp.color || color} sx={chipProp.sx || sx} onDelete={chipProp.onDelete || onDelete} component={chipProp.component || component} href={chipProp.href || href}
//         avatar = {chipProp.avatar || avatar}
//         icon = {chipProp.icon || icon}
//         size = {chipProp.size || size}
//         />  ) }
//         </Stack>
//         }</ThemeProvider>
// )}

// export default Chip;

// Chip.propTypes = {
//     direction: PropTypes.string,
//     spacing: PropTypes.number,
//     chips : PropTypes.arrayOf(PropTypes.shape({
//         label: PropTypes.string,
//         variant: PropTypes.oneOf(['outlined', 'filled']),
//         disabled: PropTypes.bool,
//         color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning','info', 'success ']),
//         sx: PropTypes.oneOfType([
//             PropTypes.arrayOf(
//               PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
//             ),
//             PropTypes.func,
//             PropTypes.object,
//             PropTypes.bool,
//           ]),
//           onDelete : PropTypes.func,
//           component: PropTypes.string,
//           href: PropTypes.string,
//           avatar: PropTypes.element,
//           icon: PropTypes.element,
//           size: PropTypes.oneOf(["small", "medium"])
//     }))

// }
