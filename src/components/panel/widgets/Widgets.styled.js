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

export const HeaderSection = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    color: theme.colors.blue[800],
    borderBottom: `1px solid ${theme.colors.blue[800]}`,
  },
}));

export const WidgetsContainer = styled(FlexContainer)(({ theme }) => ({
  height: `calc(100% - ${theme.spacing(4 * 3.5)})`,
}));

export const Widget = styled('div', {
  shouldForwardProp: (prop) => prop !== '$type',
})(({ theme, $type }) => ({
  width: $type === 'large' ? '50%' : '25%',
  height: `100%`,
  overflowY: 'scroll',
  borderRight:
    $type === 'large' ? 'none' : `1px solid ${theme.colors.grey[600]}`,
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

export const WidgetTitle = styled(FlexContainer)(({ theme }) => ({
  padding: `${theme.spacing(3)} 0`,
  paddingRight: theme.spacing(2),
  color: theme.colors.grey[800],
  borderBottom: `1px solid ${theme.colors.grey[600]}`,
  cursor: 'pointer',
}));

export const WidgetContent = styled('div')(() => ({
  fontSize: '0.9rem',
}));

export const Field = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: `${theme.spacing(2)} ${theme.spacing(10)}`,
  '&:hover': {
    backgroundColor: theme.colors.blue[600],
  },
  '&:hover span': {
    visibility: 'visible',
  },
}));

export const FieldName = styled('span')(({ theme }) => ({
  color: theme.colors.grey[800],
  paddingRight: theme.spacing(2),
}));

export const Icon = styled('svg')(({ theme }) => ({
  width: 16,
  height: 16,
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(4),
}));

export const HomeSvg = styled('svg')(({ theme }) => ({
  width: 20,
  height: 20,
  cursor: 'pointer',
  '&:hover path': {
    fill: theme.colors.grey[900],
  },
}));

export const ArrowSvg = styled('svg')(({ theme }) => ({
  width: 20,
  height: 20,
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
}));

export const EditIcons = styled('span')(({ theme }) => ({
  position: 'absolute',
  right: 16,
  top: 8,
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
