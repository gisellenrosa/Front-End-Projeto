import React from "react";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import {
  Container,
  LoginContent,
  Button,
  ButtonContent,
  Input,
  Fields,
  Field,
  Title,
  Link,
  SignUpText,
  DevelopedBy,
  SignUpContent,
  Text,
} from "./styles";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

export default function SignUpPage() {
  const history = useHistory();
  const initialForm = {
    email: "",
    name: "",
    nickname: "",
    password: "",
  };

  const FormSignUp = () => {
    const [form, onChangeForm, resetForm] = useForm(initialForm);

    const signUp = () => {
      const body = form;

      axios
        .post(
          "http://ec2-54-196-35-219.compute-1.amazonaws.com/user/signup",
          body
        )
        .then((res) => {
          window.localStorage.setItem("token", res.data.token);
          history.push("/home");
        })
        .catch((err) => {
          alert("Dados inválidos, verifique e tente novamente");
        });
    };

    const handleClick = (e) => {
      e.preventDefault();
      resetForm();
      signUp();
    };
    return (
      <div>
        <form onSubmit={handleClick}>
          <Fields>
            <Field>
              <Input
                required
                title="É necessário preencher o campo de Email"
                name="email"
                onChange={onChangeForm}
                value={form.email}
                placeholder="Email"
                pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
              />
            </Field>
            <Field>
              <Input
                required
                title="É necessário preencher o campo de Nome Completo"
                name="name"
                onChange={onChangeForm}
                value={form.name}
                placeholder="Nome Completo"
              />
            </Field>
            <Field>
              <Input
                required
                title="É necessário preencher o campo de Nome Completo"
                name="nickname"
                onChange={onChangeForm}
                value={form.nickname}
                placeholder="Nome do usuário"
              />
            </Field>
            <Field>
              <Input
                required
                title="É necessário preencher a senha"
                name="password"
                onChange={onChangeForm}
                type="password"
                value={form.password}
                placeholder="Senha"
                max={6}
                min={6}
              />
            </Field>
          </Fields>
          <ButtonContent>
            <Button> Cadastre-se </Button>
          </ButtonContent>
        </form>
      </div>
    );
  };

  return (
    <Container>
      <LoginContent>
        <Title>Photogram</Title>
        <Text>Cadastre-se para ver fotos de seus amigos</Text>
        <div>{FormSignUp()}</div>
      </LoginContent>
      <SignUpContent>
        <SignUpText>
          Tem uma conta?
          <Link onClick={() => goToLoginPage(history)}> Conecte-se</Link>
        </SignUpText>
      </SignUpContent>
      <DevelopedBy>Developed By Giselle Rosa</DevelopedBy>
    </Container>
  );
}
