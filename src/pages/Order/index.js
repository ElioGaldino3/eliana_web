import React from 'react';
import { useDispatch } from 'react-redux';

import api from '~/services/api';

import { signOutRequest } from '~/store/modules/auth/actions';

export default function Order() {
  const dispatch = useDispatch();
  api.get('clients');

  function handleSignOut() {
    dispatch(signOutRequest());
  }

  return (
    <button type="button" onClick={handleSignOut}>
      Sair
    </button>
  );
}
