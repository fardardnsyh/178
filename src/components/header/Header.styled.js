import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: `calc(100% - ${theme.spacing(4 * 2)})`,
  padding: `0px ${theme.spacing(4)}`,
  height: 56,
  backgroundColor: theme.colors.white,
  borderBottom: `1px solid ${theme.colors.grey[600]}`,
  zIndex: 100,
}));

export const HomeLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  color: theme.colors.blue[800],
}));

export const Svg = styled('svg')(({ theme }) => ({
  height: 30,
  width: 30,
  cursor: 'pointer',
  marginLeft: theme.spacing(2),
}));

export const LogOut = styled('div')(() => ({
  display: 'none',
  cursor: 'pointer',
  '@media (min-width: 900px)': {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem',
  },
}));
