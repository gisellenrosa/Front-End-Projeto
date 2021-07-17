import React from "react";
import { Title, Text, Link, TextContent } from "./styles";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

export default function ErrorPage() {
  const history = useHistory();
  return (
    <>
      <Title> Esta página não está disponível. </Title>
      <TextContent>
        <Text>
          O link em que você clicou pode não estar funcionando, ou a página pode
          ter sido removida.
          <Link onClick={() => goToLoginPage(history)}>
            Voltar para o Labegram.
          </Link>
        </Text>
      </TextContent>
    </>
  );
}
