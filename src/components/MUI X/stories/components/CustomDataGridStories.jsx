import React, { useState } from "react";
import DataGrid from "../../DataGrid/DataGrid";
import Avatar from "../../../DataDisplay/Avatar/Avatar/Avatar";
import AvatarGroup from "../../../DataDisplay/Avatar/AvatarGroup/AvatarGroup";
import Chip from "../../../DataDisplay/Chip/Chip/Chip";
import Stack from "../../../DataDisplay/Avatar/Stack/Stack";
import Icon from "../../../Foundation/Icons/Icon";
import Button from "../../../Input/Button/Button";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { background } from "storybook/internal/theming";
const columns = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 90,
    renderCell: (params) => (
      <Avatar
        loading="lazy"
        src={params.value}
        alt="Avatar"
        style={{ width: 30, height: 30, borderRadius: "50%" }}
      />
    ),
  },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 150,
    editable: true,
  },
  {
    field: "personalEmail",
    headerName: "Personal Email",
    width: 150,
    editable: true,
  },

  {
    field: "category",
    headerName: "Category",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    editable: true,
    renderCell: (params) => {
      return (
        <>
          {" "}
          {params.value === "Active" ? (
            <Chip color="success" label="Active" />
          ) : (
            <Chip color="error" label="Inactive" />
          )}
        </>
      );
    },
  },
  {
    field: "platform",
    headerName: "Platform",
    width: 180,
    editable: false,
    renderCell: (params) => {
      return (
        <AvatarGroup
          max={4}
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <Avatar variant="rounded" sx={{ bgcolor: "primary.main" }}>
            {" "}
            <Icon
              name="User"
              size={24}
              iconStyle={"BoldDuotone"}
              color={"inherit"}
            />
          </Avatar>
          <Avatar variant="rounded" sx={{ bgcolor: "secondary.main" }}>
            {" "}
            <Icon
              name="Notes"
              size={24}
              iconStyle={"BoldDuotone"}
              color={"inherit"}
            />
          </Avatar>
          <Avatar variant="rounded" sx={{ bgcolor: "error.main" }}>
            {" "}
            <Icon
              name="StarRainbow"
              size={24}
              iconStyle={"BoldDuotone"}
              color={"inherit"}
            />
          </Avatar>
          <Avatar variant="rounded">
            {" "}
            <Icon
              name="Letter"
              size={24}
              iconStyle={"BoldDuotone"}
              color={"inherit"}
            />
          </Avatar>
          <Avatar variant="rounded">
            {" "}
            <Icon
              name="Letter"
              size={24}
              iconStyle={"BoldDuotone"}
              color={"inherit"}
            />
          </Avatar>
        </AvatarGroup>
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 180,
    editable: false,
    // cellClassName: "actions",
    renderCell: (params) => {
      const { value } = params;
      const { value1, value2 } = value;
      return (
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Button variant="text" size="small">
            <Icon
              name={value1}
              iconStyle="BoldDuotone"
              size={20}
              sx={{
                cursor: "pointer",
              }}
            />
          </Button>
          <Button variant="text" size="small">
            <Icon
              name={value2}
              iconStyle="BoldDuotone"
              size={20}
              sx={{
                cursor: "pointer",
              }}
            />
          </Button>
        </Stack>
      );
    },
  },
];
const rows = [
  {
    id: 1,
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
    fullName: "Juan Dela Cruz",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Active",
    actions: {
      value1: "Pen",
      value2: "Eye",
    },
    platform:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
  },
  {
    id: 2,
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
    fullName: "Juan Dela Cruz",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Inactive",
    actions: {
      value1: "Pen",
      value2: "Eye",
    },
  },
  {
    id: 3,
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
    fullName: "Juan Dela Cruz",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Active",
    actions: {
      value1: "Pen",
      value2: "Eye",
    },
  },
  {
    id: 4,
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg",
    fullName: "Juan Dela Cruz",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Inactive",
    actions: {
      value1: "Pen",
      value2: "Eye",
    },
  },
];

const CustomDataGridDemo = ({}) => {
  return (
    <>
      <Grid container display="flex" spacing={2} sx={{ width: "90%" }}>
        <Grid size={3}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              boxShadow: 2,
              borderRadius: 2,
            }}
          >
            <h4>Data Grid</h4>
            {[0, 2, 3, 4].map((item, i) => {
              return (
                <Accordion
                  sx={{
                    boxShadow: "none",

                    border: "none",
                  }}
                  key={i}
                >
                  <AccordionSummary
                    expandIcon={
                      <Icon
                        name="AltArrowDown"
                        iconStyle={"BoldDuotone"}
                        size={20}
                        color="error"
                      />
                    }
                  >
                    Order by
                  </AccordionSummary>
                  <AccordionDetails>Loremipsum</AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Grid>
        <Grid size={9} sx={{ width: "70%", height: "auto" }}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              boxShadow: 2,
              borderRadius: 2,
            }}
          >
            <DataGrid
              columns={columns}
              rows={rows}
              rowHeight={64}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5, 10, 25]}
              disableRowSelectionOnClick
              sx={{
                border: 0,
                "& .MuiDataGrid-cell": {
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CustomDataGridDemo;
