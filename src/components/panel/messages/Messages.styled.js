import { styled } from '@mui/system';

export const FlexContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const Container = styled('div')(({ theme }) => ({
  backgroundColor: theme.colors.white,
  borderRadius: theme.borderRadius,
  border: `1px solid ${theme.colors.grey[600]}`,
  height: `calc(100vh - ${theme.spacing(20)})`,
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

export const Title = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 600,
  fontSize: '1.1rem',
}));

export const Header = styled(FlexContainer)(({ theme }) => ({
  height: 26,
  borderTopLeftRadius: theme.borderRadius,
  borderTopRightRadius: theme.borderRadius,
  backgroundColor: theme.colors.blue[600],
  padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
  borderBottom: `1px solid ${theme.colors.grey[600]}`,
  color: theme.colors.grey[800],
  '@media (min-width: 600px)': {
    padding: theme.spacing(4),
  },
}));

export const MessagesContainer = styled('div')(({ theme }) => ({
  height: `calc(100% - ${theme.spacing(4 * 3.5)})`,
}));

export const Message = styled('div')(({ theme }) => ({
  width: '100%',
  borderBottom: `1px solid ${theme.colors.grey[600]}`,
  display: 'table',
}));

export const BotMessage = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '50%',
  padding: theme.spacing(4),
  display: 'table-cell',
  '&:hover': {
    backgroundColor: theme.colors.blue[600],
  },
  '&:hover span': {
    visibility: 'visible',
  },
}));

export const UserMessage = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '50%',
  height: 'inherit',
  padding: theme.spacing(4),
  borderRight: `1px solid ${theme.colors.grey[600]}`,
  display: 'table-cell',
  '&:hover': {
    backgroundColor: theme.colors.blue[600],
  },
  '&:hover span': {
    visibility: 'visible',
  },
}));

export const EditIcons = styled('span')(({ theme }) => ({
  position: 'absolute',
  right: 16,
  top: 16,
  backgroundColor: theme.colors.blue[600],
  visibility: 'hidden',
}));

export const EditSvg = styled('svg')(({ theme }) => ({
  width: 20,
  height: 20,
  marginLeft: theme.spacing(2),
  cursor: 'pointer',
  '&:hover path': {
    fill: theme.colors.grey[900],
  },
}));

export const AddWid = styled('div')(({ theme }) => ({
  color: theme.colors.blue[800],
  cursor: 'pointer',
  '&:hover': {
    borderBottom: `1px solid ${theme.colors.blue[800]}`,
  },
}));

export const FieldName = styled('span')(({ theme }) => ({
  color: theme.colors.grey[800],
  paddingRight: theme.spacing(2),
}));
