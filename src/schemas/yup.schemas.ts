import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  userName: yup
    .string()
    .min(4, "O minimo de caracteres para o nome são 4")
    .required("O campo é obrigatório"),
  password: yup.string().min(4, "O minimo de caracteres para a senha são 4"),
});
