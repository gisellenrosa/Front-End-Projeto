import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import { Logo, Container, AvatarImg } from "./styles";
import { GlobalStateContext } from "../../global/GlobalStateContext";

export default function Header() {
  const { user, setUser } = useContext(GlobalStateContext);
  const history = useHistory();
  const getUserInformation = () => {
    axios
      .get("http://ec2-54-196-35-219.compute-1.amazonaws.com/photo/getAll", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert("Erro ao fazer requisição");
      });
  };
  const token = localStorage.getItem("token");

  const checkLogin = () => {
    if (token) {
      return (
        <div>
          {user.map((item) => {
            return (
              <div>
                <AvatarImg src={item.avatar} />
              </div>
            );
          })}
        </div>
      );
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
      <Logo onClick={() => goToHomePage(history)}>Photogram</Logo>
      <div>{checkLogin()}</div>
    </Container>
  );
}
