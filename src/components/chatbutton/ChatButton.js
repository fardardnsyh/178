import styled from '@emotion/styled';
import { ReactComponent as ButtonIcon } from '../../assets/chat.svg';
import React from 'react';

const Container = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  right: 50,
  bottom: 10,
  zIndex: 2000,
  backgroundColor: '#304F98',
  margin: 10,
  cursor: 'pointer',
  width: 50,
  height: 50,
  borderRadius: '50%',
  boxShadow: '0px 5px 10px rgb(197, 197, 197)',
  '&:hover': {
    bottom: 15,
    boxShadow: '-5px 10px 20px rgb(197, 197, 197)',
    transition: 'all 0.3s ease-in-out',
  },
}));

const ChatSvg = styled('svg')(() => ({
  width: 25,
}));

export default function ChatButton() {
  return (
    <Container>
      <ChatSvg as={ButtonIcon} />
    </Container>
  );
}
