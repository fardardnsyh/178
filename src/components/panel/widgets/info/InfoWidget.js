import React, { useEffect, useState } from 'react';
import { Container, Path, Title } from '../add/AddWidget.styled';
import { Button, TextField } from '@mui/material';
import { ButtonsContainer, CancelButton } from '../../../../theme/global';
import { useSelector } from 'react-redux';

export default function InfoWidget({ widget, setOpenInfoDialog }) {
  const { widgets } = useSelector((state) => state.widgets);
  const [id] = useState(widget ? widget.id : '');
  const [text, setText] = useState(widget ? widget.text : '');
  const [response, setResponse] = useState(widget ? widget.response : '');
  const [widgetsList, setWidgetsList] = useState([]);

  useEffect(() => {
    if (widgets) {
      const list = widget.widgets.map((id) => {
        if (!widgets[id]) return null;
        return widgets[id].text;
      });
      setWidgetsList(list);
    }
  }, [widgets]);

  return (
    <>
      <Title>
        <div>Информация о виджете</div>
        <Path>Путь: </Path>
      </Title>
      <Container>
        <TextField
          value={text}
          label="Text"
          variant="outlined"
          multiline
          fullWidth
          margin="normal"
        />
        <TextField
          value={response}
          label="Response"
          variant="outlined"
          multiline
          fullWidth
          margin="normal"
        />
        <TextField
          label="Widgets"
          variant="outlined"
          fullWidth
          margin="normal"
          value={widgetsList.toString()}
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
        <CancelButton onClick={() => setOpenInfoDialog(false)}>
          Отмена
        </CancelButton>
        <Button variant="contained">Сохранить</Button>
      </ButtonsContainer>
    </>
  );
}
