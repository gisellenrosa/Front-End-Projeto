import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import useAuthorization from "../../hooks/useAuthentication";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import {
  Container,
  AvatarImg,
  AuthorInfo,
  PhotoContainer,
  PostImg,
  PostInfo,
  ButtonContent,
  NickInfo,
} from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddIcon from "@material-ui/icons/Add";
import { goToPostPage } from "../../routes/coordinator";

const useStyles = makeStyles((theme) => ({
  button: {},
}));

export default function HomePage() {
  const history = useHistory();
  const classes = useStyles();
  const { photos, setPhotos } = useContext(GlobalStateContext);
  const token = useAuthorization();

  useEffect(() => {
    if (token) {
      getPhotos();
    }
  }, [token]);

  const getPhotos = () => {
    axios
      .get("http://ec2-54-196-35-219.compute-1.amazonaws.com/photo/getAll", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((err) => {
        alert("Erro ao buscar imagens");
      });
  };
  return (
    token && (
      <Container>
        <Header />
        <ButtonContent>
          <Button
            onClick={() => goToPostPage(history)}
            variant="contained"
            color="default"
            startIcon={<AddCircleIcon />}
          >
            Enviar imagem
          </Button>
        </ButtonContent>
        <PhotoContainer>
          {photos &&
            photos.map((item) => {
              return (
                <div>
                  <AuthorInfo>
                    <AvatarImg src={item.avatar} />
                    <NickInfo> {item.nickname}</NickInfo>
                  </AuthorInfo>

                  <PostImg src={item.file} />

                  <PostInfo>Numero de curtidas {item.description}</PostInfo>
                </div>
              );
            })}
        </PhotoContainer>
      </Container>
    )
  );
}
