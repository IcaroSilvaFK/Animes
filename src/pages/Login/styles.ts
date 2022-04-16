import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  background-color: var(--backgorund-login);

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  color: var(--letter-color);
`;

export const Main = styled.div`
  background: var(--background-form);
  border-radius: 10px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 15px;

    padding: 40px;

    button {
      border-radius: 20px;

      width: 150px;

      background-color: var(--letter-color);

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;

      padding: 10px 40px;

      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  a {
    color: #a0aec0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--background-input-container);

  padding: 5px;

  border-radius: 5px;

  label {
    font-size: 12px;
  }

  input {
    background-color: transparent;
    font-size: 15px;
    padding: 5px;

    color: #fff;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 5px;
`;
