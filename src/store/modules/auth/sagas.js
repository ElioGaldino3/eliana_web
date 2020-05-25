import { toast } from 'react-toastify';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import { signInSuccess, signFailure, signOutProceed } from './actions';

import api from '~/services/api';
import history from '~/services/history';
// eslint-disable-next-line import/no-cycle
import { store } from '~/store';

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, 'auth/login', { username, password });

    const { user } = response.data;
    user.isAuth = user.isAuth === 'true';

    if (!user.isAuth) {
      toast.error(
        'Seu usuário não possui autorização de acesso. Mais informações: eliogaldino79@outlook.com',
        { autoClose: 15000 }
      );
      yield put(signFailure());
      return;
    }
    api.defaults.headers.Authorization = `Bearer ${user.token}`;
    api.interceptors.response.use(
      (interceptorResponse) => interceptorResponse,
      (error) => {
        if (error.response.status === 401) {
          toast.error('Sua sessão expirou, faça o login novamente', {
            autoClose: 10000,
          });
        }
      }
    );
    yield put(signInSuccess(user));

    history.push('/order');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { username, password, confirmPassword } = payload;

    if (password !== confirmPassword) {
      toast.error('As senhas não conferem');
      yield put(signFailure());
      return;
    }

    yield call(api.post, 'auth', { username, password });
    toast.success(
      'Cadastro realizado com sucesso, aguarde um administrador lhe aceitar',
      {
        autoClose: 6000,
      }
    );
    yield put(signFailure());
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(signFailure());
  }
}

export function* signOut() {
  yield put(signOutProceed());

  history.push('/');
}

export function setApiConfiguration({ payload }) {
  if (!payload) return;
  const { user } = payload.auth;
  if (user) {
    api.defaults.headers.Authorization = `Bearer ${user.token}`;

    api.interceptors.response.use(
      (interceptorResponse) => interceptorResponse,
      (error) => {
        if (error?.response?.status === 401) {
          toast.error('Sua sessão expirou, faça o login novamente', {
            autoClose: 6000,
          });
          store.dispatch(signOutProceed());
          history.push('/');
        }
      }
    );
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setApiConfiguration),
  takeLatest('@auth/SIGN_OUT_REQUEST', signOut),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
