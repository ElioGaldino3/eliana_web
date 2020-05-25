import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(180deg, #06122f 0%, #12021e 100%);
  box-shadow: 5px 0px 15px rgba(0, 0, 0, 0.1);

  padding: 0 16px;
`;

export const Profile = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;

  align-items: center;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  span {
    margin-top: 14px;
    color: #fff;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  width: 216px;
  height: 100%;
  display: flex;

  nav {
    flex: 1;

    section {
      margin-top: 16px;
      display: flex;
      flex-direction: column;

      a {
        margin: 0 0 20px;
        color: #fff;
        font-size: 16px;
        display: flex;
        align-items: center;
        transition: opacity 0.2s;
        svg {
          margin-right: 8px;
        }

        &:hover {
          opacity: 0.7;
        }
      }

      button {
        justify-self: flex-end;
        border: 0;
        height: 32px;
        background: linear-gradient(180deg, #7a0aa1 0%, #9733ee 100%);
        border-radius: 4px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          margin-right: 8px;
        }
      }
    }
  }
`;
