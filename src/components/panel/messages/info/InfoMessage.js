import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Path, Title } from '../../widgets/add/AddWidget.styled';
import { Button, TextField } from '@mui/material';
import { ButtonsContainer, CancelButton } from '../../../../theme/global';

export default function InfoMessage({ message, setOpenInfoDialog }) {
  const [id] = useState(uuidv4());
  const [text, setText] = useState(message);

  return (
    <>
      <Title>
        <div>Информация о сообщении</div>
        <Path>Путь: </Path>
      </Title>
      <Container>
        <TextField
          value={text}
          variant="outlined"
          multiline
          fullWidth
          margin="normal"
        />
      </Container>
      <ButtonsContainer>
        <CancelButton onClick={() => setOpenInfoDialog(false)}>
          Отмена
        </CancelButton>
        <Button variant="contained">Сохранить</Button>
      </ButtonsContainer>
    </>
  );
}
