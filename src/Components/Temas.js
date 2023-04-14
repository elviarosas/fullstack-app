import React from "react";
import { useState, useEffect } from "react";
import CardTema from "./CardTema";

function Temas() {
  const [dataTema, setDataTema] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/temas")
      .then((response) => response.json())
      .then((data) => setDataTema(data));
  }, []);

  return (
    <div>
      <div>
        {dataTema &&
          dataTema.map((item) => (
            <div key={item.id}>
              <CardTema datos={item} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Temas;
