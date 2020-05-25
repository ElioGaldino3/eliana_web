import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  FaFilePdf,
  FaUsers,
  FaCalendarAlt,
  FaCommentAlt,
  FaCaretDown,
} from 'react-icons/fa';
import {
  Container,
  OrderTile,
  CreateOrder,
  Select,
  ClientList,
  ClientItem,
} from './styles';

export default function Order() {
  const [visible, setVisible] = useState(false);
  const clients = ['Elio', 'Eliana', 'Elika'];

  const [selectedClient, setSelectedClient] = useState(clients[0]);

  function handleSelect(value) {
    setSelectedClient(value);
    setVisible(false);
  }

  return (
    <Container>
      <ul>
        <OrderTile statusColor="#219653">
          <aside>
            <span className="tile-date">20 de Junho de 2020</span>
            <span className="tile-remain">Falta 27 dias para entregar!</span>
            <span className="tile-day">Sábado</span>
          </aside>
          <button type="button">
            <FaFilePdf size={16} />
          </button>
        </OrderTile>
        <OrderTile statusColor="#219653">
          <aside>
            <span className="tile-date">20 de Junho de 2020</span>
            <span className="tile-remain">Falta 27 dias para entregar!</span>
            <span className="tile-day">Sábado</span>
          </aside>
          <button type="button">
            <FaFilePdf size={16} />
          </button>
        </OrderTile>
      </ul>
      <CreateOrder>
        <h2>Adicionar Encomenda</h2>
        <form>
          <Select type="button" onClick={() => setVisible(!visible)}>
            <aside>
              <FaUsers size={17} />
              <span>{selectedClient}</span>
            </aside>
            <FaCaretDown />
          </Select>
          <ClientList visible={visible}>
            {clients.map((client) => (
              <ClientItem type="button" onClick={() => handleSelect(client)}>
                {client}
              </ClientItem>
            ))}
          </ClientList>
          <Select type="button" onClick={() => {}}>
            <aside>
              <FaCalendarAlt size={17} />
              <span>10 de Março de 2020</span>
            </aside>
          </Select>
        </form>
      </CreateOrder>
    </Container>
  );
}
