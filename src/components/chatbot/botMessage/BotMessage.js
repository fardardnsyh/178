import React from 'react';
import styled from '@emotion/styled';

const Container = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  width: 40,
  marginRight: 0,
}));

export default function BotAvatar() {
  return <Container></Container>;
}
