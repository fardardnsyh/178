import { styled } from '@mui/material';

export const FlexContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const Title = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 600,
  fontSize: '1.1rem',
}));

export const Container = styled('div')(({ theme }) => ({
  backgroundColor: theme.colors.white,
  borderRadius: theme.borderRadius,
  border: `1px solid ${theme.colors.grey[600]}`,
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
}));

export const Header = styled(FlexContainer)(({ theme }) => ({
  width: '100%',
  justifyContent: 'center',
  fontWeight: 600,
  marginBottom: theme.spacing(3),
}));

export const LineChartContainer = styled('div')(() => ({
  height: 300,
}));

export const PieChartContainer = styled('div')(() => ({
  height: 300,
  width: 400,
}));

export const TableContainer = styled('div')(({ theme }) => ({
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  maxHeight: 300,
  width: `calc(100% - 400px)`,
  backgroundColor: theme.colors.grey[500],
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr',
  fontSize: '0.9rem',
}));

export const TableHeader = styled('div')(({ theme }) => ({
  color: theme.colors.grey[800],
  borderBottom: `1px solid ${theme.colors.grey[600]}`,
  padding: theme.spacing(3),
}));

export const PercentTableHeader = styled(TableHeader)(({ theme }) => ({
  borderLeft: `1px solid ${theme.colors.grey[600]}`,
  borderRight: `1px solid ${theme.colors.grey[600]}`,
}));

export const TableCell = styled('div')(({ theme }) => ({
  display: 'flex',
  borderBottom: `1px solid ${theme.colors.grey[600]}`,
  padding: theme.spacing(3),
}));

export const PercentCell = styled(TableCell)(({ theme }) => ({
  display: 'flex',
  borderLeft: `1px solid ${theme.colors.grey[600]}`,
  borderRight: `1px solid ${theme.colors.grey[600]}`,
  color: theme.colors.blue[800],
}));

export const QuestionContainer = styled(Container)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const QuestionPercent = styled('div')(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  color: theme.colors.blue[800],
  marginLeft: 'auto',
}));
