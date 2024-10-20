import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FileUpload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Falls keine Datei ausgewählt wurde, nichts tun
    if (!selectedFile) return;

    // Erstellen des FormData Objekts
    const formData = new FormData();
    formData.append("file", selectedFile); // 'file' ist der Key, unter dem die Datei gesendet wird

    // POST Anfrage mit fetch
    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Datei erfolgreich hochgeladen");
        const responseData = await response.json();
        navigate("/listview", { state: { responseData } });
      } else {
        console.log("Fehler beim Hochladen der Datei");
      }
    } catch (error) {
      console.error("Fehler:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Hochladen</button>
    </form>
  );
};

export default FileUpload;
