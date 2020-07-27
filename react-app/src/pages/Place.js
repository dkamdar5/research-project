import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Place = () => {
    let { id } = useParams();
    const [place, setPlace] = useState();

    useEffect(() => {
        fetch(`/api/places/${id}`).then(res => res.json()).then(data => {
            setPlace(JSON.parse(data))
        })
      }, [])

    return (
        <div>
          <h1>Place</h1>
          <Link to="/places">Back</Link>
          <ul>
            { place && 
                <>
                    <li>Name: {place["name"]}</li>
                    <li>Location: {place["location"]}</li>
                </>
            }
          </ul>
       </div>
    )
}

export default Place;