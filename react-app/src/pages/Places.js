import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Places = () => {
    const [places, setPlaces] = useState();

    useEffect(() => {
        fetch('/api/places').then(res => res.json()).then(data => {
          setPlaces(JSON.parse(data))
        })
      }, [])

    return (
        <div>
          <h1>Places</h1>
          <ul>
            { places && 
              places.map((v, i) => {
                return (
                  <>
                    <Link to={`/places/${v["_id"]["$oid"]}`}>Go to {v["name"]}</Link>
                    <li key={i}>Name: {v["name"]}</li>
                    <li key={i}>Location: {v["location"]}</li>
                  </>
                )
              })
            }
          </ul>
       </div>
    )
}

export default Places;