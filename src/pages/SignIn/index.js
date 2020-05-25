import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  username: Yup.string().required('O nome de usuário é obrigatório'),
  password: Yup.string()
    .min(4, 'Precisa no mínimo 4 caractéres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ username, password }) {
    dispatch(signInRequest(username, password));
  }

  return (
    <>
      <img src={logo} alt="Eliana Personalizações" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="username" placeholder="Seu usuário" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Não tem conta? Clique aqui para se cadastrar</Link>
      </Form>
    </>
  );
}
