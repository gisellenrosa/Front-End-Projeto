import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function useAuthorization() {
  const [token, setToken] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);

    if (!savedToken) {
      history.push("/");
      setTimeout(() => {
        alert("Necessário fazer Login");
      }, 800);
    }
  }, [history]);

  return token;
}
