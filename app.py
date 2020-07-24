from flask import Flask, jsonify, render_template
import db
from bson.json_util import dumps

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('homepage.html')

@app.route('/places')
def places():
    places = db.get_places()
    return render_template('places.html', places = places)

@app.route('/places/<string:place_id>')
def place(place_id):
    place = db.get_place(place_id)
    return render_template('place.html', place=place)

@app.route('/api/places')
def api_places():
    places = db.get_places()
    encoded = dumps(places)
    return jsonify(encoded)