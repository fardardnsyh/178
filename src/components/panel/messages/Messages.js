import React, { useEffect, useState } from 'react';
import { data } from '../../../assets/data';
import {
  AddWid,
  BotMessage,
  Container,
  EditIcons,
  EditSvg,
  FieldName,
  Header,
  Message,
  MessagesContainer,
  Title,
  UserMessage,
} from './Messages.styled';
import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg';
import { InfoDialog } from '../../../theme/global';
import AddMessage from './add/AddMessage';
import InfoMessage from './info/InfoMessage';
import { fetchMessagesData } from '../../../actions/Actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Messages() {
  const dispatch = useDispatch();
  const { status, messages } = useSelector((state) => state.messages);
  const [openDialog, setOpenDialog] = useState(false);
  const [openInfoDialog, setOpenInfoDialog] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    dispatch(fetchMessagesData());
  }, [dispatch]);

  return (
    <div>
      <Title>Сообщения</Title>
      <Container>
        <Header>
          <AddWid onClick={() => setOpenDialog(true)}>
            +Добавить сообщение
          </AddWid>
        </Header>
        <MessagesContainer>
          {messages.map((value) => (
            <Message key={value.id}>
              <UserMessage>
                <FieldName>user:</FieldName>
                {value.user[0]}
                <EditIcons>
                  <EditSvg
                    as={EditIcon}
                    onClick={() => {
                      setSelectedMessage(value.user[0]);
                      setOpenInfoDialog(true);
                    }}
                  />
                  <EditSvg as={DeleteIcon} />
                </EditIcons>
              </UserMessage>
              <BotMessage>
                <FieldName>bot:</FieldName>
                {value.bot}
                <EditIcons>
                  <EditSvg
                    as={EditIcon}
                    onClick={() => {
                      setSelectedMessage(value.bot);
                      setOpenInfoDialog(true);
                    }}
                  />
                  <EditSvg as={DeleteIcon} />
                </EditIcons>
              </BotMessage>
            </Message>
          ))}
        </MessagesContainer>
      </Container>
      <InfoDialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <AddMessage setOpenDialog={setOpenDialog} />
      </InfoDialog>
      <InfoDialog
        open={openInfoDialog}
        onClose={() => setOpenInfoDialog(false)}
      >
        <InfoMessage
          message={selectedMessage}
          setOpenInfoDialog={setOpenInfoDialog}
        />
      </InfoDialog>
    </div>
  );
}
