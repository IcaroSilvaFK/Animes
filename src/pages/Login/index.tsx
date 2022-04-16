import { useState, useEffect } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill, RiLoginBoxFill } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { api } from "../../configs/axios";
import { LoginSchema } from "../../schemas/yup.schemas";
import { Input } from "../../components/Input";
import { Container, Column, Main, Row } from "./styles";

interface IFormProps {
  userName: string;
  password: string;
}

export function LoginPage() {
  const props = useForm<IFormProps>({
    defaultValues: {
      password: "",
      userName: "",
    },
    resolver: yupResolver(LoginSchema),
  });

  const onSumit: SubmitHandler<IFormProps> = async (data) => {
    try {
      const response = await api.post("login", data);
    } catch (error) {
      toast.error("Infelismente tivemos um erro", {
        draggable: true,
        theme: "dark",
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    toast.error(props.formState.errors.password?.message, {
      draggable: true,
      theme: "dark",
      position: "top-center",
    });
    toast.error(props.formState.errors.userName?.message, {
      draggable: true,
      theme: "dark",
      position: "top-center",
    });
  }, [
    props.formState.errors.password?.message,
    props.formState.errors.userName?.message,
  ]);

  return (
    <Container>
      <h1>ANIMES FREE</h1>
      <Main>
        <FormProvider {...props}>
          <form onSubmit={props.handleSubmit(onSumit)}>
            <Column>
              <label>Username</label>
              <Row>
                <FaUserAlt size={18} />
                <Input
                  name='userName'
                  placeholder='Digite o nome de usuário'
                  type='text'
                />
              </Row>
            </Column>
            <Column>
              <label>Password</label>
              <Row>
                <RiLockPasswordFill size={18} />
                <Input
                  name='password'
                  placeholder='Digite aqui a senha'
                  type='password'
                />
              </Row>
            </Column>
            <button type='submit'>
              LOG IN <RiLoginBoxFill color='#46BBE1' size={20} />
            </button>
          </form>
        </FormProvider>
        <Link to='/register'>Ainda não possui conta?</Link>
      </Main>
    </Container>
  );
}
