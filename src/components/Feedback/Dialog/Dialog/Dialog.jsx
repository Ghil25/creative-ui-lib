import { Dialog as MUIDialog } from "@mui/material";

const Dialog = ({
  open,
  ariaDescibedby,
  arialLabelledby,

  children,
  disableEscapeKeyDown,
  fullScreen,
  fullWidth,
  maxWidth,
  onClose,
  onEscapeKeyDown,
  PaperProps,
  scroll,
  TransitionComponent,
  TransitionProps,
  ...props
}) => {
  return (
    <MUIDialog
      open={open}
      ariaDescibedby={ariaDescibedby}
      arialLabelledby={arialLabelledby}
      disableEscapeKeyDown={disableEscapeKeyDown}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onClose={onClose}
      onEscapeKeyDown={onEscapeKeyDown}
      PaperProps={PaperProps}
      scroll={scroll}
      TransitionComponent={TransitionComponent}
      TransitionProps={TransitionProps}
      {...props}
    >
      {children}{" "}
    </MUIDialog>
  );
};

export default Dialog;
