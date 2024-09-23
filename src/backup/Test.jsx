import React, { Fragment } from "react";
import { Box, Chip, DataGrid, Icon } from "../../../../../components";
import { GridActionsCellItem } from "@mui/x-data-grid";
import * as SolarIconSet from "solar-icon-set";

const columns = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 90,
    renderCell: (params) => (
      <img
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
        <Fragment>
          {params.value === "Active" ? (
            <Chip color="success" label="Active" />
          ) : (
            <Chip color="error" label="Inactive" />
          )}
        </Fragment>
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 180,
    editable: false,
    cellClassName: "actions",
    renderCell: () => {
      return (
        <Fragment>
          <GridActionsCellItem
            label="Edit"
            icon={
              <Icon color="secondary">
                <SolarIconSet.Pen iconStyle="BoldDuotone" size={24} />
              </Icon>
            }
          />
          <GridActionsCellItem
            label="View"
            icon={
              <Icon color="secondary">
                <SolarIconSet.Eye iconStyle="BoldDuotone" size={24} />
              </Icon>
            }
          />
        </Fragment>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    avatar: "/avatars/Avatar 1.svg",
    fullName: "Von Perez",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Active",
  },
  {
    id: 2,
    avatar: "/avatars/Avatar 2.svg",
    fullName: "Aldrin Villalobos",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Inactive",
  },
  {
    id: 3,
    avatar: "/avatars/Avatar 3.svg",
    fullName: "Elmer Bautista",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Active",
  },
  {
    id: 4,
    avatar: "/avatars/Avatar 4.svg",
    fullName: "Marjon Dupeng",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Inactive",
  },
];

const Basic = () => {
  return (
    <DataGrid
      rows={rows}
      rowHeight={64}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5, 10, 25]}
      disableRowSelectionOnClick
      sx={{ border: 0 }}
    />
  );
};

export default Basic;
