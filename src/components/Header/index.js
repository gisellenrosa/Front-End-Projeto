import React from "react";
import { Logo, Container } from "./styles";

export default function Header() {
  const token = localStorage.getItem("token");

  const checkLogin = () => {
    if (token) {
      return <div>PERFIL DO USUARIO</div>;
    } else {
      return (
        <div>
          <button>Entrar</button> <p>Cadastre-se</p>
        </div>
      );
    }
  };
  return (
    <Container>
      <Logo>Photogram</Logo>
      <div>{checkLogin()}</div>
    </Container>
  );
}
