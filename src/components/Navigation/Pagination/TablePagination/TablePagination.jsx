import React from "react";
import PropTypes from "prop-types";
import { TablePagination as MUITablePagination } from "@mui/material";
import ThemeProvider from "../../../../ThemeProvider";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

const TablePagination = ({
  count,
  onPageChange,
  page,
  rowsPerPage,
  ActionsComponent = TablePaginationActions,

  component,
  disabled,
  getItemAriaLabel,
  labelDisplayedRows,
  labelRowsPerPage = "Rows per page:",
  nextIconButtonProps,
  onRowsPerPageChange,
  rowsPerPageOptions = [10, 25, 50, 100],
  SelectProps = {},
  showFirstButton = false,
  showLastButton = false,
  slotProps = {},
  slots = {},
  sx,
  ...props
}) => {
  return (
    <ThemeProvider>
      <MUITablePagination
        count={count}
        onPageChange={onPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        ActionsComponent={ActionsComponent}
        component={component}
        disabled={disabled}
        getItemAriaLabel={getItemAriaLabel}
        labelDisplayedRows={labelDisplayedRows}
        labelRowsPerPage={labelRowsPerPage}
        nextIconButtonProps={nextIconButtonProps}
        onRowsPerPageChange={onRowsPerPageChange}
        SelectProps={SelectProps}
        showFirstButton={showFirstButton}
        showLastButton={showLastButton}
        slotProps={slotProps}
        slots={slots}
        sx={sx}
        {...props}
      />
    </ThemeProvider>
  );
};

TablePagination.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  ActionsComponent: PropTypes.elementType,
  backIconButtonProps: PropTypes.object,
  classes: PropTypes.object,
  component: PropTypes.element,
  disabled: PropTypes.bool,
  getItemAriaLabel: PropTypes.func,
  labelDisplayedRows: PropTypes.func,
  labelRowsPerPage: PropTypes.node,
  nextIconButtonProps: PropTypes.object,
  onRowsPerPageChange: PropTypes.func,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  SelectProps: PropTypes.object,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export default TablePagination;
