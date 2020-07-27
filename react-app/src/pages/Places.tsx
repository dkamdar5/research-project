import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Place from '../models/place';

const Places = () => {
    const [places, setPlaces] = useState<Place[]>();

    useEffect(() => {
        fetch('/api/places').then(res => res.json()).then(data => {
          let dataObj = JSON.parse(data);
          const places = dataObj.map((v, i) => {
            return {
              id: v["_id"]["$oid"],
              name: v["name"],
              location:v["location"]
            }
          })
          setPlaces(places)
        })
      }, [])

    return (
        <div>
          <h1>Places</h1>
          <ul>
            { places && 
              places.map((place, i) => {
                return (
                  <>
                    <Link to={`/places/${place.id}`}>Go to {place.name}</Link>
                    <li key={i}>Name: {place.name}</li>
                    <li key={i}>Location: {place.location}</li>
                  </>
                )
              })
            }
          </ul>
       </div>
    )
}

export default Places;