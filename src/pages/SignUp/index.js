import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  username: Yup.string().required('O usuário é obrigatório'),
  password: Yup.string()
    .min(4, 'Precisa no mínimo 4 caractéres')
    .required('A senha é obrigatória'),
  confirmPassword: Yup.string()
    .min(4, 'Precisa no mínimo 4 caractéres')
    .required('A confirmação de senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ username, password, confirmPassword }) {
    dispatch(signUpRequest(username, password, confirmPassword));
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
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/">Já possui uma conta? Faça login</Link>
      </Form>
    </>
  );
}
