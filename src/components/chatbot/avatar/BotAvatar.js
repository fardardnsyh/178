import React from 'react';
import avatar from '../../../assets/logoIcon.png';
import styled from '@emotion/styled';

const Container = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  width: 40,
  marginRight: 0,
}));

const AvatarIcon = styled('img')(() => ({
  width: 25,
}));

export default function BotAvatar() {
  return (
    <Container>
      <AvatarIcon alt="botAvatar" src={avatar} />
    </Container>
  );
}
