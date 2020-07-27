import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as PlaceModel from '../models/place';
import * as db from '../services/db';

const Place = () => {
    let { id } = useParams();
    const [place, setPlace] = useState<PlaceModel.default>();

    useEffect(() => {
      const getPlace = async () => {
        const data = await db.getPlace(id);
        setPlace(data)
      }

      getPlace();
    }, [])

    return (
        <div>
          <h1>Place</h1>
          <Link to="/places">Back</Link>
          <ul>
            { place && 
                <>
                    <li>Name: {place.name}</li>
                    <li>Location: {place.location}</li>
                </>
            }
          </ul>
       </div>
    )
}

export default Place;