import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Path, Title } from '../../widgets/add/AddWidget.styled';
import { Button, TextField } from '@mui/material';
import { ButtonsContainer, CancelButton } from '../../../../theme/global';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../../actions/Actions';

export default function AddMessage({ setOpenDialog }) {
  const [id] = useState(uuidv4());
  const [user, setUser] = useState('');
  const [bot, setBot] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <Title>
        <div>Добавить сообщение</div>
        <Path>Путь: </Path>
      </Title>
      <Container>
        <TextField
          label="User"
          variant="outlined"
          multiline
          fullWidth
          margin="normal"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <TextField
          value={bot}
          label="Bot"
          variant="outlined"
          multiline
          fullWidth
          margin="normal"
          onChange={(event) => setBot(event.target.value)}
        />
      </Container>
      <ButtonsContainer>
        <CancelButton onClick={() => setOpenDialog(false)}>Отмена</CancelButton>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(addMessage({ id, user: [user], bot }));
            setOpenDialog(false);
          }}
        >
          Сохранить
        </Button>
      </ButtonsContainer>
    </>
  );
}
