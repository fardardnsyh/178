import React, { useState } from 'react';
import {
  Container,
  ErrorHelperText,
  FlexContainer,
  Logo,
  LogoContainer,
  SignInButton,
  SignInContainer,
  SignInTitle,
  TextInputField,
} from './SignIn.styled';
import logo from '../../assets/logoIcon.png';
import { getHelperText, logIn } from './utils';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignInCorrect, setIsSignInCorrect] = useState({
    status: '',
    correct: true,
  });
  const signInHelperText = getHelperText(isSignInCorrect.status);
  const navigate = useNavigate();

  return (
    <Container>
      <LogoContainer>
        <FlexContainer>
          <Logo alt="logo" src={logo} />
          <div>METU Chatbot</div>
        </FlexContainer>
      </LogoContainer>
      <SignInContainer>
        <SignInTitle>Авторизация</SignInTitle>
        <TextInputField
          margin="normal"
          required
          label="Email адрес"
          autoComplete="off"
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextInputField
          type="password"
          margin="normal"
          required
          label="Пароль"
          autoComplete="off"
          onChange={(event) => setPassword(event.target.value)}
        />
        <ErrorHelperText $isShowError={!isSignInCorrect.correct}>
          {signInHelperText}
        </ErrorHelperText>
        <SignInButton
          variant="contained"
          onClick={() => logIn(email, password, navigate, setIsSignInCorrect)}
        >
          Войти
        </SignInButton>
      </SignInContainer>
    </Container>
  );
}
