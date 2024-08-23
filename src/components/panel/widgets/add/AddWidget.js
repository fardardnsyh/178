import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Path, Title } from './AddWidget.styled';
import { Button, TextField } from '@mui/material';
import { ButtonsContainer, CancelButton } from '../../../../theme/global';
import { addNewWidget } from './utils';
import { useDispatch } from 'react-redux';

export default function AddWidget({ selectedId, allWidgets, setOpenDialog }) {
  const [id] = useState(uuidv4());
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');
  const [widgets, setWidgets] = useState([]);
  const dispatch = useDispatch();

  return (
    <>
      <Title>
        <div>Добавить виджет</div>
        <Path>Путь: </Path>
      </Title>
      <Container>
        <TextField
          label="Text"
          variant="outlined"
          multiline
          fullWidth
          margin="normal"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <TextField
          label="Response"
          variant="outlined"
          multiline
          fullWidth
          margin="normal"
          value={response}
          onChange={(event) => setResponse(event.target.value)}
        />
        <TextField
          label="Widgets"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          value={id}
          label="Id"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
      </Container>
      <ButtonsContainer>
        <CancelButton onClick={() => setOpenDialog(false)}>Отмена</CancelButton>
        <Button
          variant="contained"
          onClick={() => {
            addNewWidget(
              dispatch,
              selectedId,
              allWidgets,
              id,
              text,
              response,
              widgets,
            );
            setOpenDialog(false);
          }}
        >
          Сохранить
        </Button>
      </ButtonsContainer>
    </>
  );
}
