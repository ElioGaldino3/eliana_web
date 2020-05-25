import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fff;
  flex-direction: row;
  ul {
    padding: 16px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-content: flex-start;
  }
`;

export const OrderTile = styled.li`
  margin: 8px 16px;
  flex: 1 1 30%;
  height: 80px;
  padding: 16px;
  background: #141414;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 5px solid ${(props) => props.statusColor};

  button {
    background: transparent;
    border: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  aside {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 11px;
    margin-right: 32px;
    div {
      height: 8px;
      width: 100%;
      background: #93f;
    }
    span {
      margin: 2px 0;
    }
    span.tile-date {
      font-weight: bold;
      font-size: 13px;
    }
  }
`;

export const CreateOrder = styled.aside`
  width: 216px;
  height: 100%;
  background: linear-gradient(180deg, #06122f 0%, #12021e 100%);
  box-shadow: -5px 0px 15px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 16px;
    font-size: 15px;
    text-align: center;
  }

  form {
    padding: 0 16px 16px 16px;
    color: #fff;

    div {
      background: rgba(0, 0, 0, 0.5);
      border: 0;
    }
  }
`;

export const Select = styled.button`
  padding: 8px;
  border-radius: 4px;
  margin-top: 12px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: 8px;
    }
  }
`;

export const ClientList = styled.div`
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;

  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

export const ClientItem = styled.button`
  display: block;
  width: 100%;

  background: transparent;
  color: #fff;
  border: 0;
  padding: 8px;

  transition: opacity 0.2s;

  & + button {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  &:hover {
    opacity: 0.6;
  }
`;
