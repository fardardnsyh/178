import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled('div')(({ theme }) => ({
  display: 'none',
  position: 'fixed',
  top: 56,
  left: 0,
  height: `calc(100vh - 56px)`,
  padding: theme.spacing(3),
  width: `calc(200px - ${theme.spacing(3 * 2)})`,
  borderRight: `1px solid ${theme.colors.grey[600]}`,
  backgroundColor: theme.colors.white,
  '@media (min-width: 1000px)': {
    display: 'block',
  },
}));

export const ContentContainer = styled('div')(({ theme }) => ({
  '@media (min-width: 600px)': {
    margin: `${theme.spacing(5)} ${theme.spacing(7)}`,
  },
}));

export const MenuLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  display: 'flex',
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  marginBottom: theme.spacing(2),
  width: `calc(100% - ${theme.spacing(2 * 2)})`,
  color: theme.colors.grey[800],
  fontSize: '0.9rem',
  '&:hover': {
    color: theme.colors.black,
    transition: 'all 0.3s ease-out',
  },
  '&.active': {
    color: theme.colors.black,
    fontWeight: 600,
    borderLeft: `2px solid ${theme.colors.blue[800]}`,
  },
}));
