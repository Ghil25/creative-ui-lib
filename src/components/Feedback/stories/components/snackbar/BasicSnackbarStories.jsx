import React from "react";
import Stack from "../../../../DataDisplay/Avatar/Stack/Stack";

import Alert from "../../../Alert/Alert/Alert";
import Icon from "../../../../Foundation/Icons/Icon";
import IconButton from "../../../../Input/Button/IconButton/IconButton";

const BasicSnackbar = ({ stack, alerts, children, ...props }) => {
  return (
    <Stack {...stack}>
      {alerts.map((alert, index) => {
        const { children, ico, ...aler } = alert;
        const Action = (
          <IconButton>
            <Icon {...ico} />
          </IconButton>
        );
        return (
          <Alert key={index} {...aler} action={Action} {...props}>
            {children}
          </Alert>
        );
      })}
    </Stack>
  );
};

export default BasicSnackbar;
