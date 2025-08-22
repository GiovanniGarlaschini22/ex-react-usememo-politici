// MILESTONE 1 //

/*
📌 Milestone 1: Recuperare e visualizzare i dati
Effettua una chiamata API a
http://localhost:3333/politicians

Salva la risposta in uno stato React (useState).

Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:

Nome (name)
Immagine (image)
Posizione (position)
Breve biografia (biography)

Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.
*/


// MILESTONE 2 //

/*
📌 Milestone 2: Implementare la ricerca ottimizzata
Aggiungi un campo di ricerca (<input type="text">) sopra la lista dei politici.
Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.
❌ Non usare useEffect per aggiornare l’array filtrato.

Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.
*/


// MILESTONE 3 //

/*
📌 Milestone 3: Ottimizzare il rendering delle card con React.memo
Attualmente, ogni volta che l’utente digita nella barra di ricerca, tutte le card vengono ri-renderizzate, anche quelle che non sono cambiate.
Usa React.memo() per evitare il ri-render delle card quando le loro props non cambiano.
Aggiungi un console.log() dentro il componente Card per verificare che venga renderizzato solo quando necessario.

Obiettivo: Se la lista filtrata cambia, solo le nuove card devono essere renderizzate, mentre le altre rimangono in memoria senza essere ridisegnate.
*/

import React, {useState, useEffect, useMemo} from 'react';
import './App.css'

function Politicians() {

  const [politicians, setPoliticians] = useState([]);

  const totalToPay = useMemo(() => {
    return politicians.length * 1000;
  }, [politicians]);

  useEffect(() => {
    fetch('http://localhost:3333/politicians')
      .then(response => response.json())
      .then(data => setPoliticians(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <div>
        <h1 className="page-title">Politicians</h1>
        <div className="politicians-grid">
          {politicians.map((politician, index) => (
            <div key={politician.id || index} className="politician-card">
              <h3 className="politician-name">{politician.name}</h3>
              <img 
                src={politician.image} 
                alt={politician.name} 
                className="politician-image"
              />
              <p className="politician-info">
                <span className="politician-label">Position:</span> {politician.position}
              </p>
              <p className="politician-info">
                <span className="politician-label">Biography:</span> {politician.biography}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Politicians;