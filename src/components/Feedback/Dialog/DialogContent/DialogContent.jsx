import { DialogContent as NMSDialogContent } from "@mui/material";

const DialogContent = ({ children, dividers, sx, ...props }) => {
  return (
    <NMSDialogContent dividers={dividers} sx={sx} {...props}>
      {children}
    </NMSDialogContent>
  );
};
