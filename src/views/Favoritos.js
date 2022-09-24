import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {
  const { fotos, setFotos } = useContext(Context);
  const deleteFavorito = (id) => {
    const fotoIndex = fotos.findIndex((f) => f.id === id);
    fotos.splice(fotoIndex, 1);
    setFotos([...fotos]);
  };
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotos
          .filter((foto) => foto.favorito)
          .map((foto, i) => (
            <img src={foto.src} alt="" onClick={() => deleteFavorito(foto.id)} key={i} />
          ))}
      </div>
    </div>
  );
}

