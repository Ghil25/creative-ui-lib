import { DialogActions as NMSDialogActions } from "@mui/material";

const DialogActions = ({ children, disableSpacing, sx, ...props }) => {
  return (
    <NMSDialogActions disableSpacing={disableSpacing} sx={sx} {...props}>
      {children}
    </NMSDialogActions>
  );
};

export default DialogActions;
