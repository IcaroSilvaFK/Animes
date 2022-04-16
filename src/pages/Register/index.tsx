import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";

import { api } from "../../configs/axios";
import { Input } from "../../components/Input";

import { Container, Main, Column, Row } from "./styles";

interface IFormProps {
  name: string;
  userName: string;
  password: string;
}

export function RegisterPage() {
  const props = useForm<IFormProps>({
    defaultValues: {
      name: "",
      password: "",
      userName: "",
    },
  });

  const onSubmit: SubmitHandler<IFormProps> = async (data) => {
    console.log(data);
    const response = await api.post("register", data);

    console.log(response);
  };

  return (
    <Container>
      <h1>Cadastro de Usuário</h1>
      <Main>
        <FormProvider {...props}>
          <form onSubmit={props.handleSubmit(onSubmit)}>
            <Column>
              <label>Name</label>
              <Row>
                <FaUserAlt />
                <Input name='name' placeholder='Digite seu nome' type='text' />
              </Row>
            </Column>
            <Column>
              <label>User name</label>
              <Row>
                <FaUserAlt />
                <Input
                  name='userName'
                  placeholder='Digite seu nome de usuário'
                  type='text'
                />
              </Row>
            </Column>
            <Column>
              <label>password</label>
              <Row>
                <RiLockPasswordFill />
                <Input
                  name='password'
                  placeholder='Digite sua senha'
                  type='password'
                />
              </Row>
            </Column>
            <button type='submit'>
              Enviar <IoIosSend color='#46BBE1' size={20} />
            </button>
          </form>
        </FormProvider>
      </Main>
    </Container>
  );
}
