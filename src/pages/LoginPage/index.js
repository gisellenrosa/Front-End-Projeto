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
} from "./styles";
import { useHistory } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";

export default function LoginPage() {
  const history = useHistory();
  const initialForm = {
    email: "",
    password: "",
  };

  const FormLogin = () => {
    const [form, onChangeForm, resetForm] = useForm(initialForm);

    const login = () => {
      const body = form;

      axios
        .post("https://backend-fullstack-labenu.herokuapp.com/user/login", body)
        .then((res) => {
          window.localStorage.setItem("token", res.data.token);
          history.push("/home");
        })
        .catch((err) => {
          alert("Erro: Usuário não encontrado");
        });
    };

    const handleClick = (e) => {
      e.preventDefault();
      resetForm();
      login();
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
            <Button> Entrar </Button>
          </ButtonContent>
        </form>
      </div>
    );
  };

  return (
    <Container>
      <LoginContent>
        <Title>Photogram</Title>
        <div>{FormLogin()}</div>
      </LoginContent>
      <SignUpContent>
        <SignUpText>
          Não tem uma conta?
          <Link onClick={() => goToSignUpPage(history)}> Cadastre-se</Link>
        </SignUpText>
      </SignUpContent>
      <DevelopedBy>Developed By Giselle Rosa</DevelopedBy>
    </Container>
  );
}
