import React, { useContext } from "react";
import { useParams } from "react-router-dom";

export default function () {
  const { grotteId } = useParams();

  const grotte = grottes.find((g) => g.id === grotteId);

  if (!grotte) {
    return <div>Grotte non trouvée</div>;
  }

  return (
    <div>
      <h1>{grotte.nom}</h1>
      <img src={grotte.image} alt={grotte.nom} />
      <p>Localisation: {grotte.localisation}</p>
      <p>Description: {grotte.description}</p>
      <p>Type: {grotte.type}</p>
      <p>Date de location:{grotte.date_de_location}</p>
      <p>Prix 🥪: {grotte.prix_sandwich}</p>
      <p>Prix 🐗: {grotte.prix_sanglier}</p>
      <p>Superficie: {grotte.superficie}</p>
    </div>
  );
}
