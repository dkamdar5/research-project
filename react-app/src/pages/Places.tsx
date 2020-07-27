import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Place from '../models/place';
import * as db from '../services/db';

const Places = () => {
    const [places, setPlaces] = useState<Place[]>();

    useEffect(() => {
      const getPlaces = async () => {
        const data = await db.getPlaces();
        setPlaces(data)
      }

      getPlaces();
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