import { DialogContentText as NMSDialogContentText } from "@mui/material";

const DialogContentText = ({ children, sx, ...props }) => {
  return (
    <NMSDialogContentText sx={sx} {...props}>
      {children}
    </NMSDialogContentText>
  );
};
export default DialogContentText;
