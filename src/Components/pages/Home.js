import React, { useState } from "react";
import FileUpload from "../FileUpload";

const testUrl = "/api";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // Zustand für den Ladevorgang

  // Funktion, um die API-Daten nach Button-Klick zu laden
  const fetchData = () => {
    setLoading(true); // Ladevorgang beginnt
    fetch(testUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // API-Daten setzen
        setLoading(false); // Ladevorgang beendet
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Ladevorgang auch bei Fehler beenden
      });
  };

  return (
    <div className="button-container">
      <h1>Eine neue Zählung starten</h1>
      {/* Button zum Laden der API-Daten */}
      <button onClick={fetchData}>+</button>
      <FileUpload />

      {/* Ladeanzeige während der API-Anfrage */}
      {loading && <p>Lade Daten...</p>}

      {/* Anzeige der API-Daten, sobald sie vorhanden sind */}
      {data && <pre>{JSON.stringify(data.message, null, 2)}</pre>}
    </div>
  );
}

export default Home;
