import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "../Dialog";

import { NMSAvatar, NMSStack } from "../../../components/DataDisplay/Avatar";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
} from "../../DataDisplay/List";

export default {
  title: "Components/Feedback/Dialog",
  component: Dialog,
};
const Basic = ({ dialog, dialogTitle, dialogContent, dialogContentText }) => {
  //   return <Dialog onClose={handleClose} open={open}>
  //   <DialogTitle>Set backup account</DialogTitle>
  //   <List sx={{ pt: 0 }}>
  //     {emails.map((email) => (
  //       <ListItem disableGutters key={email}>
  //         <ListItemButton onClick={() => handleListItemClick(email)}>
  //           <ListItemAvatar>
  //             <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
  //               <PersonIcon />
  //             </Avatar>
  //           </ListItemAvatar>
  //           <ListItemText primary={email} />
  //         </ListItemButton>
  //       </ListItem>
  //     ))}
  //     <ListItem disableGutters>
  //       <ListItemButton
  //         autoFocus
  //         onClick={() => handleListItemClick("addAccount")}
  //       >
  //         <ListItemAvatar>
  //           <Avatar>
  //             <AddIcon />
  //           </Avatar>
  //         </ListItemAvatar>
  //         <ListItemText primary="Add account" />
  //       </ListItemButton>
  //     </ListItem>
  //   </List>
  // </Dialog>
  // );
  // }

  return (
    <Dialog>
      <DialogTitle>Set backup account</DialogTitle>
      <List></List>
    </Dialog>
  );
};
