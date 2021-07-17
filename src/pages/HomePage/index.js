import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import useAuthorization from "../../hooks/useAuthentication";
import { Container } from "./styles";

export default function HomePage() {
  const [photos, setPhotos] = useState([]);
  useAuthorization();

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    const token = window.localStorage.getItem("token");
    axios
      .get("https://backend-fullstack-labenu.herokuapp.com/image/all", {
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
    <Container>
      <Header />
      {photos &&
        photos.map((item) => {
          return <img src={item.file} />;
        })}

      <div>HOME PAGE</div>
    </Container>
  );
}
