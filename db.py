from pymongo import MongoClient
import dns # required for connecting with SRV
import os
import config
from bson.objectid import ObjectId
from werkzeug.exceptions import abort

connectionString = os.getenv('connectionString')

# connect to MongoDB
client = MongoClient(config.connectionString)

db = client["test"]

# Functions for Places collection
places_collection = db["place"]

def get_places():
    return list(places_collection.find())

def get_place(place_id):
    results = list(places_collection.find({ "_id" : ObjectId(place_id) }))

    if len(results) == 0:
        abort(404)

    return(results[0])