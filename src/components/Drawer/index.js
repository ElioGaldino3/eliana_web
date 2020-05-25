import React from 'react';
import {
  FaBox,
  FaInbox,
  FaMoneyBillWave,
  FaUsers,
  FaSignOutAlt,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutRequest } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Drawer() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  function handleSignOut() {
    dispatch(signOutRequest());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Profile>
            <img
              src={
                user.photoUrl ||
                'https://api.adorable.io/avatars/76/abott@adorable.png'
              }
              alt={user.username}
            />
            <span>{user.username}</span>
          </Profile>

          <section>
            <Link to="/order">
              <FaInbox size={23} />
              Encomendas
            </Link>
            <Link to="/product">
              <FaBox size={23} />
              Produtos
            </Link>
            <Link to="/client">
              <FaUsers size={23} />
              Clientes
            </Link>
            <Link to="/billing" className="teste">
              <FaMoneyBillWave size={23} />
              Encomendas
            </Link>
            <button onClick={handleSignOut} type="button">
              <FaSignOutAlt size={16} />
              Sair
            </button>
          </section>
        </nav>
      </Content>
    </Container>
  );
}
