import { styled } from '@mui/system';

export const FlexContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  paddingTop: 0,
}));

export const Title = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 600,
  fontSize: '1.2rem',
  backgroundColor: theme.colors.blue[800],
  padding: theme.spacing(4),
  color: theme.colors.white,
}));

export const Path = styled('div')(({ theme }) => ({
  fontSize: '0.8rem',
  marginTop: theme.spacing(4),
}));
