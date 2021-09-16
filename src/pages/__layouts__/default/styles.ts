import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  > main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;

    form {
      display: flex;
      flex-direction: column;
      max-width: 350px;
      width: 100%;
      padding: 20px;
      border-radius: 4px;
      background: #fff;
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);

      > button {
        align-self: center;
        margin-top: 20px;
      }
    }
  }
`;
