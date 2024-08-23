import { Button, Dialog } from '@mui/material';
import { styled } from '@mui/system';

export const InfoDialog = styled(Dialog)((props) => ({
  '& .MuiPaper-root': {
    '&.MuiDialog-paper': {
      background: props.theme.colors.white,
      margin: 0,
      maxHeight: '100%',
      width: `100%`,
      '@media (min-width: 768px)': {
        margin: props.theme.spacing(8),
        maxHeight: `100%`,
        width: `75%`,
      },
      '@media (min-width: 1000px)': {
        width: `50%`,
      },
      '&::-webkit-scrollbar': {
        width: 5,
      },
      '&::-webkit-scrollbar-thumb': {
        background: props.theme.colors.grey[600],
        borderRadius: props.theme.borderRadius * 4,
      },
    },
  },
}));

export const ButtonsContainer = styled('div')(({ theme }) => ({
  textAlign: 'right',
  padding: theme.spacing(4),
  paddingTop: 0,
}));

export const CancelButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(4),
}));
