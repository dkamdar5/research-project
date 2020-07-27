import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as PlaceModel from '../models/place';

const Place = () => {
    let { id } = useParams();
    const [place, setPlace] = useState<PlaceModel.default>();

    useEffect(() => {
        fetch(`/api/places/${id}`).then(res => res.json()).then(data => {
          const dataObj = JSON.parse(data)
          const place = {
            id: dataObj["_id"]["$oid"],
            name: dataObj["name"],
            location: dataObj["location"]
          }
          setPlace(place)
        })
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