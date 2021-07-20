import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

export default function GlobalState(props) {
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState([]);

  return (
    <GlobalStateContext.Provider value={{ photos, setPhotos, user, setUser }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}
