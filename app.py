from flask import Flask, jsonify, render_template, request
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

@app.route('/places/new')
def places_add():
    return render_template('newplace.html')

@app.route('/places/new', methods=['POST'])
def places_new():
    place = request.form['place']
    location = request.form['location']
    db.set_place(place, location)
    return render_template('places.html')

@app.route('/places/<string:place_id>')
def place(place_id):
    place = db.get_place(place_id)
    return render_template('place.html', place=place)

@app.route('/api/places')
def api_places():
    places = db.get_places()
    encoded = dumps(places)
    return jsonify(encoded) 