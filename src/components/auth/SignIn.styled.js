import { Button, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const FlexContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const Container = styled('div')(({ theme }) => ({
  textAlign: 'center',
  width: `calc(100% - ${theme.spacing(3 * 2)})`,
  minHeight: `calc(100vh - ${theme.spacing(3 * 2)})`,
  padding: theme.spacing(3),
  background: theme.colors.grey[500],
  color: theme.colors.blue[800],
  '@media (min-width: 600px)': {
    width: `calc(100% - ${theme.spacing(5 * 2)})`,
    padding: theme.spacing(5),
    minHeight: `calc(100vh - ${theme.spacing(5 * 2)})`,
  },
}));

export const LogoContainer = styled(FlexContainer)(() => ({
  justifyContent: 'center',
  width: '100%',
}));

export const Logo = styled('img')(() => ({
  height: 45,
  '@media (min-width: 600px)': {
    display: 'block',
    margin: 0,
  },
}));

export const SignInContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',
  width: `100%`,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: theme.spacing(3),
  background: theme.colors.white,
  color: theme.colors.black,
  borderRadius: theme.borderRadius * 2,
  border: `1px solid ${theme.colors.grey[600]}`,
  '@media (min-width: 600px)': {
    marginTop: theme.spacing(5),
    width: `80%`,
  },
  '@media (min-width: 768px)': {
    width: `50%`,
    maxWidth: 450,
    maxHeight: 470,
  },
}));

export const SignInTitle = styled('div')(({ theme }) => ({
  background: theme.colors.blue[800],
  color: theme.colors.white,
  fontSize: '1.5rem',
  fontWeight: 500,
  padding: `${theme.spacing(5)} ${theme.spacing(2)}`,
  marginBottom: theme.spacing(6),
  borderTopLeftRadius: theme.borderRadius * 2,
  borderTopRightRadius: theme.borderRadius * 2,
  '@media (min-width: 600px)': {
    padding: theme.spacing(5),
    marginBottom: theme.spacing(4),
  },
}));

export const TextInputField = styled(TextField)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  width: `calc(100% - ${theme.spacing(2 * 2)})`,
  '@media (min-width: 600px)': {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    width: `calc(100% - ${theme.spacing(4 * 2)})`,
  },
}));

export const SignInButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(4),
}));

export const ErrorHelperText = styled('div', {
  shouldForwardProp: (prop) => prop !== '$isShowError',
})((props) => ({
  display: props.$isShowError ? 'block' : 'none',
  color: 'red',
}));
