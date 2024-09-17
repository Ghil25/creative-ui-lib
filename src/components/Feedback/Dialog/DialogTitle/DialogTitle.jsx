import { DialogTitle as NMSDialogTitle } from "@mui/material";

const DialogTitle = ({ children, sx, ...props }) => {
  return (
    <NMSDialogTitle sx={sx} {...props}>
      {children}
    </NMSDialogTitle>
  );
};

export default DialogTitle;
