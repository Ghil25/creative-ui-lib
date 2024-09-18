// import React from "react";
// import Chip from "../Chipcollection";
// import Avatar from "@mui/material/Avatar";
// import * as SolarIconSet from "solar-icon-set";

// export default {
//   title: "Components/DataDisplay/Chip",
//   component: Chip,
// };

// const Template = (args) => <Chip {...args} />;

// export const BasicChips = Template.bind({});
// BasicChips.args = {
//   direction: "row",
//   spacing: 2,
//   chips: [
//     {
//       label: "chip filled",
//       variant: "filled",
//       color: "primary",
//     },
//     {
//       label: "chip outlined",
//       variant: "outlined",
//       color: "primary",
//     },
//     {
//       label: "chip filled",
//       variant: "filled",
//       color: "primary",
//       disabled: true,
//     },
//     {
//       label: "chip outlined",
//       variant: "outlined",
//       color: "primary",
//       disabled: true,
//     },
//   ],
// };

// export const ClickableChips = Template.bind({});
// ClickableChips.args = {
//   direction: "row",
//   spacing: 2,
//   chips: [
//     {
//       label: "chip filled",
//       variant: "filled",
//       color: "primary",
//       clickable: true,
//     },
//     {
//       label: "chip outlined",
//       variant: "outlined",
//       color: "primary",
//       clickable: true,
//     },
//   ],
// };

// export const DeletableChips = Template.bind({});
// DeletableChips.args = {
//   direction: "row",
//   spacing: 2,
//   chips: [
//     {
//       label: "chip filled",
//       variant: "filled",
//       color: "primary",
//       onDelete: () => {
//         return console.info("you clicke the delete icon");
//       },
//     },
//     {
//       label: "chip outlined",
//       variant: "outlined",
//       color: "primary",
//       onDelete: () => {
//         return console.info("you clicke the delete icon");
//       },
//     },
//   ],
// };

// export const ClickableLinkChips = Template.bind({});
// ClickableLinkChips.args = {
//   direction: "row",
//   spacing: 2,
//   chips: [
//     {
//       label: "chip filled",
//       variant: "filled",
//       color: "primary",
//       component: "a",
//       href: "#clickable-chip",
//       clickable: true,
//     },
//     {
//       label: "chip outlined",
//       variant: "outlined",
//       color: "primary",
//       component: "a",
//       href: "#clickable-chip",
//       clickable: true,
//     },
//   ],
// };

// export const AvatarChips = Template.bind({});
// AvatarChips.args = {
//   direction: "row",
//   spacing: 2,
//   chips: [
//     {
//       label: "chip filled",
//       variant: "filled",
//       color: "primary",

//       clickable: true,
//       avatar: <Avatar alt="DG" src="sss" />,
//     },
//     {
//       label: "chip outlined",
//       variant: "outlined",
//       color: "primary",

//       clickable: true,
//       avatar: (
//         <Avatar
//           alt="DG"
//           src="https://media.istockphoto.com/id/147694372/photo/badger-dog.jpg?s=612x612&w=0&k=20&c=3iNYkarzevpIJeHcmQAykq0cubiSlL4URl91qIlacxM="
//         />
//       ),
//     },
//   ],
// };

// export const IconChips = Template.bind({});
// IconChips.args = {
//   direction: "row",
//   spacing: 2,
//   chips: [
//     {
//       label: "chip filled",
//       variant: "filled",
//       color: "primary",

//       clickable: true,
//       icon: <SolarIconSet.RoundAltArrowDown iconStyle="BoldDuotone" />,
//     },
//     {
//       label: "chip outlined",
//       variant: "outlined",
//       color: "primary",

//       clickable: true,
//       icon: <SolarIconSet.RoundAltArrowDown />,
//     },
//   ],
// };

// export const ColorsChips = Template.bind({});
// ColorsChips.args = {
//   direction: "row",
//   spacing: 2,
//   chips: [
//     {
//       label: "primary",
//       variant: "filled",
//       color: "primary",
//       clickable: true,
//     },
//     {
//       label: "secondary",
//       variant: "filled",
//       color: "secondary",
//       clickable: true,
//     },
//     {
//       label: "success",
//       variant: "filled",
//       color: "success",
//       clickable: true,
//     },
//     {
//       label: "warning",
//       variant: "filled",
//       color: "warning",
//       clickable: true,
//     },
//     {
//       label: "error",
//       variant: "filled",
//       color: "error",
//       clickable: true,
//     },

//     //outlined
//     {
//       label: "primary",
//       variant: "outlined",
//       color: "primary",
//       clickable: true,
//     },
//     {
//       label: "secondary",
//       variant: "outlined",
//       color: "secondary",
//       clickable: true,
//     },
//     {
//       label: "success",
//       variant: "outlined",
//       color: "success",
//       clickable: true,
//     },
//     {
//       label: "warning",
//       variant: "outlined",
//       color: "warning",
//       clickable: true,
//     },
//     {
//       label: "error",
//       variant: "outlined",
//       color: "error",
//       clickable: true,
//     },
//   ],
// };

// export const SizeChips = Template.bind({});
// SizeChips.args = {
//   direction: "row",
//   spacing: 2,
//   chips: [
//     {
//       label: "small",
//       variant: "filled",
//       color: "primary",
//       clickable: true,
//       size: "small",
//     },
//     {
//       label: "medium",
//       variant: "filled",
//       color: "primary",
//       clickable: true,
//       size: "medium",
//     },
//     {
//       label: "small",
//       variant: "outlined",
//       color: "primary",
//       clickable: true,
//       size: "small",
//     },
//     {
//       label: "medium",
//       variant: "outlined",
//       color: "primary",
//       clickable: true,
//       size: "medium",
//     },
//   ],
// };
