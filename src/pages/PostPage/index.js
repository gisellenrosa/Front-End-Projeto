import React from "react";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import useAuthorization from "../../hooks/useAuthentication";

import Header from "../../components/Header";
import {
  Container,
  Button,
  ButtonContent,
  Input,
  Fields,
  Field,
  FormContainer,
} from "./syles";

export default function PostPage() {
  const initialForm = {
    file: "",
    description: "",
  };
  const history = useHistory();
  const token = useAuthorization();
  const FormCreateImage = () => {
    const [form, onChangeForm, resetForm] = useForm(initialForm);

    const createImage = () => {
      const body = form;

      axios
        .post(
          "http://ec2-54-196-35-219.compute-1.amazonaws.com/photo/create",
          body,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          alert("Imagem enviada com sucesso");
          history.push("/home");
        })
        .catch((err) => {
          alert(err.message);
          alert("Dados inválidos, verifique e tente novamente");
        });
    };

    const handleClick = (e) => {
      e.preventDefault();
      resetForm();
      createImage();
    };
    return (
      <div>
        <form onSubmit={handleClick}>
          <Fields>
            <Field>
              <Input
                required
                title="É necessário enviar o link da imagem"
                name="file"
                onChange={onChangeForm}
                value={form.file}
                placeholder="Link da imagem"
              />
            </Field>
            <Field>
              <Input
                title="Conte-nos mais sobre a sua imagem"
                name="description"
                onChange={onChangeForm}
                value={form.description}
                placeholder="Descriçao da imagem"
              />
            </Field>
          </Fields>
          <ButtonContent>
            <Button> Enviar imagem</Button>
          </ButtonContent>
        </form>
      </div>
    );
  };
  return (
    <Container>
      <Header />
      <FormContainer>{FormCreateImage()}</FormContainer>
    </Container>
  );
}
