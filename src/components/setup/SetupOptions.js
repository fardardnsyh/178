import React from 'react';
import { Button, alpha } from '@mui/material';
import { styled } from '@mui/system';

const OptionsButton = styled(Button)(() => ({
  color: 'rgb(48, 79, 152)',
  border: `1px solid ${alpha('rgb(48, 79, 152)', 0.2)}`,
  backgroundColor: alpha('rgb(48, 79, 152)', 0.2),
  marginRight: 10,
  marginBottom: 10,
  '&:hover': {
    backgroundColor: alpha('rgb(48, 79, 152)', 0.3),
    color: 'rgb(48, 79, 152)',
  },
}));

export default function SetupOptions(props) {
  const buttonsOptions = props.data[props.id].widgets.map((widgetId) => (
    <OptionsButton
      size="small"
      variant="outlined"
      key={widgetId}
      onClick={props.actionProvider[`handle${widgetId}`]}
    >
      {props.data[widgetId].text}
    </OptionsButton>
  ));

  return <div>{buttonsOptions}</div>;
}
