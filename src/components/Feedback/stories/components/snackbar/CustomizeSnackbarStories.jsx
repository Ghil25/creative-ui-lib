import React from "react";
import Stack from "../../../../DataDisplay/Avatar/Stack/Stack";

import Alert from "../../../Alert/Alert/Alert";
import Icon from "../../../../Foundation/Icons/Icon";
import IconButton from "../../../../Input/Button/IconButton/IconButton";
import Button from "../../../../Input/Button/Button";

const CustomSnackbar = ({ stack, alerts, ...props }) => {
  return (
    <Stack {...stack}>
      {alerts.map((alert, index) => {
        const { children, stack, ico, button1, button2, ...aler } = alert;
        const Action = (
          <Stack {...stack}>
            <Button {...button1} />
            <Button {...button2} />
          </Stack>
        );
        const icon = <Icon {...ico} />;
        return (
          <Alert key={index} {...aler} action={Action} icon={icon} {...props}>
            {children}
          </Alert>
        );
      })}
    </Stack>
  );
};

export default CustomSnackbar;
