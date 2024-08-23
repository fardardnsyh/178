import React from 'react';
import { Container, HomeLink, LogOut, Svg } from './Header.styled';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logOut.svg';
import { logOut } from '../auth/utils';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <HomeLink to="/panel">METU Chatbot</HomeLink>
      <LogOut
        onClick={() => {
          logOut(navigate);
        }}
      >
        Выйти
        <Svg as={LogoutIcon} />
      </LogOut>
    </Container>
  );
}
