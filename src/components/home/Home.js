import React from 'react';
import styled from '@emotion/styled';
import MetuChatBot from '../chatbot/MetuChatbot';
import ChatButton from '../chatbutton/ChatButton';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Link } from 'react-router-dom';

const ChatBotContainer = styled('div')(() => ({}));

export default function Home() {
  const [ref] = useOutsideClick();
  const toggleDisplay = (event) => {
    event.stopPropagation();
    ref.current.classList.toggle('none');
  };

  return (
    <div className="App">
      {/* <Link to="/signin">Go to admin panel</Link> */}
      <ChatBotContainer ref={ref} className="none">
        <MetuChatBot />
      </ChatBotContainer>
      <div onClick={(event) => toggleDisplay(event)}>
        <ChatButton />
      </div>
    </div>
  );
}
