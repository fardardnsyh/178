import React from 'react';
import { Outlet } from 'react-router-dom';
import { ContentContainer, MenuLink, NavContainer } from './Navigation.styled';
import { Grid } from '@mui/material';

export default function Navigation() {
  const gridStyles = {
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 14,
    paddingBottom: 14,
    '@media (min-width: 1000px)': {
      paddingLeft: 48,
    },
  };
  return (
    <Grid container sx={gridStyles}>
      <NavContainer>
        <div>
          <MenuLink to="widgets">Виджеты</MenuLink>
        </div>
        <div>
          <MenuLink to="messages">Сообщения</MenuLink>
        </div>
        <div>
          <MenuLink to="reports">Отчеты</MenuLink>
        </div>
      </NavContainer>
      <Grid item xs={12}>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Grid>
    </Grid>
  );
}
