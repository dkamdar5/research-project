from flask import Flask, render_template
import db

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