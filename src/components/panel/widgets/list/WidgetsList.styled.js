import { styled } from '@mui/system';
import { FlexContainer } from '../Widgets.styled';

export const WidgetsList = styled('div')(() => ({
  display: 'flex',
}));

export const Polygon = styled('svg')(() => ({
  width: 20,
  height: 15,
  cursor: 'pointer',
  position: 'absolute',
  left: 16,
}));

export const WidgetsListItem = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  position: 'relative',
}));

export const WidgetField = styled('div')(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  paddingLeft: theme.spacing(14),
  '&:hover': {
    backgroundColor: theme.colors.blue[600],
  },
  '&:hover span': {
    visibility: 'visible',
  },
}));

export const Field = styled(FlexContainer)(({ theme }) => ({
  position: 'relative',
  padding: `${theme.spacing(2)} ${theme.spacing(10)}`,
  '&:hover': {
    backgroundColor: theme.colors.blue[600],
  },
}));

export const FieldName = styled(FlexContainer)(({ theme }) => ({
  color: theme.colors.grey[800],
  paddingRight: `${theme.spacing(2)}`,
}));

export const FieldIndex = styled('div')(({ theme }) => ({
  color: theme.colors.grey[800],
  paddingRight: theme.spacing(2),
  fontSize: '0.8rem',
}));

export const FieldDesc = styled('div')(({ theme }) => ({
  color: theme.colors.grey[800],
}));

export const AddWid = styled('div')(({ theme }) => ({
  color: theme.colors.blue[800],
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  paddingLeft: theme.spacing(14),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.colors.blue[600],
  },
}));

export const EditIcons = styled('span')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 0,
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

export const IdContainer = styled('span')(({ theme }) => ({
  whiteSpace: 'nowrap',
}));
