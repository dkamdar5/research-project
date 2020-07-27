import Place from "../models/place";

export const getPlace = (id: string) => {
    return fetch(`/api/places/${id}`)
        .then(res => res.json())
        .then(data => {
            const dataObj = JSON.parse(data);

            const place: Place = {
                id: dataObj["_id"]["$oid"],
                name: dataObj["name"],
                location: dataObj["location"]
            }

            return place;
        })
}

export const getPlaces = () => {
    return fetch('/api/places')
        .then(res => res.json())
        .then(data => {
            let dataObj = JSON.parse(data);

            const places: Place[] = dataObj.map((v, i) => {
                return {
                    id: v["_id"]["$oid"],
                    name: v["name"],
                    location:v["location"]
                }
            })

            return places;
        })
}