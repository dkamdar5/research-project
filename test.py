from pymongo import MongoClient
import dns # required for connecting with SRV
import os
#from pprint import pprint

connectionString = os.getenv('connectionString')

# connect to MongoDB
client = MongoClient("mongodb+srv://admin:admin@cluster0.29f5c.mongodb.net/test?retryWrites=true&w=majority")

print("Database names:")
for name in client.list_database_names():
    print(name)

db = client.test
print("Collection names:")
for name in db.list_collection_names():
    print(name)

collection = db.test
print("Document names:")
for name in collection.find():
    print(name)

# # Issue the serverStatus command and print the results
# serverStatusResult = db.command("serverStatus")
# pprint(serverStatusResult)
experience = db.experience
post_1 = {
    'place': 'Devils Lake',
    'experience': 'great scenery, big rocks ',
    'rating': '5'
}
post_2 = {
    'place': 'Starved Rock',
    'experience': 'great hike, views, etc.. ',
    'rating': '4'
}
post_3 = {
    'place': 'Niagra Falls',
    'experience': 'love the water stream, great attraction',
    'rating': '4.3'
}
new_result = experience.update_one({"place": "Starved Rock"}, { "$set": { "experience": 'great hike, views, etc.. ', "rating": "4" }})
print('Multiple posts: {0}'.format(new_result.inserted_ids))

