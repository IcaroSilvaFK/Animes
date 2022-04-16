import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  background-color: var(--backgorund-login);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: #fff;
`;

export const Main = styled.div`
  background: var(--background-form);

  padding: 50px;
  border-radius: 10px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      padding: 10px 30px;
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 20px;

      transition: all 0.3s;

      &:hover {
        transform: scale(1.1);
        filter: brightness(0.8);
      }
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  background: var(--background-input-container);

  padding: 5px;

  border-radius: 5px;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;

  padding: 4px;

  input {
    background: transparent;

    padding: 5px;

    color: #fff;
  }
`;
