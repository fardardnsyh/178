import React, { useState } from 'react';
import { Container, Path, Title } from '../add/AddWidget.styled';
import { Button, TextField } from '@mui/material';
import { ButtonsContainer, CancelButton } from '../../../../theme/global';

export default function InfoField({ field, setOpenFieldDialog }) {
  const [text, setText] = useState(field);

  return (
    <>
      <Title>
        <div>Информация о поле</div>
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
        <CancelButton onClick={() => setOpenFieldDialog(false)}>
          Отмена
        </CancelButton>
        <Button variant="contained">Сохранить</Button>
      </ButtonsContainer>
    </>
  );
}
