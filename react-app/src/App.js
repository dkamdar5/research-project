import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [places, setPlaces] = useState();

  useEffect(() => {
    fetch('/api/places').then(res => res.json()).then(data => {
      setPlaces(JSON.parse(data))
      console.log(data)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { places && 
            places.map((v, i) => {
              return (
                <>
                  <li key={i}>Name: {v["name"]}</li>
                  <li key={i}>Location: {v["location"]}</li>
                </>
              )
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
