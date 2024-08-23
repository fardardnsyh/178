import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/firebaseConfigs';

export const getHelperText = (text) => {
  switch (text) {
    case 'email':
      return 'Некорректный email';
    case 'email_or_password':
      return 'Неверный email или пароль';
    case 'user_disabled':
      return 'Пользователь был отключен';
    case 'no_user':
      return 'Не существует пользователя с таким email';
    case 'password':
      return 'Неверный пароль';
    case 'try_later':
      return 'Операция не прошла. Попробуйте позже';
    default:
      return 'Не удалось выполнить вход';
  }
};

export const logIn = async (email, password, navigate, setIsSignInCorrect) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/panel/widgets');
  } catch (error) {
    const errorCode = error.code;
    const isCorrect = {
      status: '',
      correct: false,
    };
    switch (errorCode) {
      case 'auth/invalid-email':
        setIsSignInCorrect({
          ...isCorrect,
          status: 'email',
        });
        return;
      case 'auth/invalid-credential':
        setIsSignInCorrect({
          ...isCorrect,
          status: 'email_or_password',
        });
        return;
      case 'auth/user-disabled':
        setIsSignInCorrect({
          ...isCorrect,
          status: 'user_disabled',
        });
        return;
      case 'auth/user-not-found':
        setIsSignInCorrect({
          ...isCorrect,
          status: 'no_user',
        });
        return;
      case 'auth/wrong-password':
        setIsSignInCorrect({
          ...isCorrect,
          status: 'password',
        });
        return;
      default:
        setIsSignInCorrect({
          ...isCorrect,
          status: 'try_later',
        });
        return;
    }
  }
};

export const logOut = async (navigate) => {
  navigate('/');
};
