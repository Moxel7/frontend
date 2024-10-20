import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function ListView() {
  const location = useLocation();
  const { responseData } = location.state || {};
  const itemCount = responseData ? responseData.length : 0;

  // Erstelle einen State für die Anzahl der Kasten und Flaschen, setze initial auf 0
  const [quantities, setQuantities] = useState(
    responseData ? responseData.map(() => ({ kasten: 0, flaschen: 0 })) : []
  );

  const handleChange = (index, field, value) => {
    const newQuantities = [...quantities]; // Erstelle eine flache Kopie des orginial States
    // Stelle sicher, dass nur Zahlen eingegeben werden
    newQuantities[index][field] = Number(value) || 0; // Umwandlung in eine Zahl, 0 wenn leer
    setQuantities(newQuantities);
  };

  return (
    <div>
      {/* Anzahl der Items anzeigen */}

      <h1>Biere, Softdrinks (Einträge insgesamt: {itemCount})</h1>

      {/* Tabelle anzeigen */}
      {responseData && (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Kasten</th>
              <th>Flaschen</th>
              <th>Gesamt</th>
            </tr>
          </thead>
          <tbody>
            {/* Iteriere über das Array von Objekten und zeige die Items in der Tabelle an */}
            {responseData.map((item, index) => (
              <tr key={index}>
                <td>{item.Item}</td>
                <td>
                  <input
                    type="number"
                    value={quantities[index].kasten}
                    onChange={(e) =>
                      handleChange(index, "kasten", e.target.value)
                    }
                    min="0" // Stelle sicher, dass der Wert nicht negativ ist
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={quantities[index].flaschen}
                    onChange={(e) =>
                      handleChange(index, "flaschen", e.target.value)
                    }
                    min="0" // Stelle sicher, dass der Wert nicht negativ ist
                  />
                </td>
                <td>
                  {/* Gesamt berechnen: Kasten (z.B. 24 Flaschen pro Kasten) + Flaschen */}
                  {quantities[index].kasten * 24 + quantities[index].flaschen}{" "}
                  {/* Beispielannahme: 1 Kasten = 24 Flaschen */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListView;
