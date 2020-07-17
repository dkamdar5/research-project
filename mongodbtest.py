from pymongo import MongoClient
import dns # required for connecting with SRV
import os
#from pprint import pprint

connectionString = os.getenv('connectionString')

# connect to MongoDB
client = MongoClient(connectionString)

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