import os
import base64
import json
from pymongo import MongoClient

def get_mongo_client():
    path = ("./config_file.json")
    #READ THE JSON FILE
    mongo_params = json.load(open(path, "r"))
    uri = f"mongodb://{mongo_params['mongo_username']}:"
    uri += f"{mongo_params['mongo_pass']}@"
    uri += f"{mongo_params['mongo_ip']}:{mongo_params['mongo_port']}"
    uri += f"/?authMechanism=DEFAULT"
    uri += f"&authSource={mongo_params['mongo_auth_db']}"
    client = MongoClient(uri)
    return client[mongo_params["database"]]



# Select the collection
collection = get_mongo_client()['3d-models']

# Iterate over the GLTF files in the directory
for filename in os.listdir('./3d-models'):
    if filename.endswith('.glb'):
        # Open the GLB file and read its contents
        with open(os.path.join('./3d-models', filename), 'rb') as file:
            glb_contents = file.read()

        # Encode the GLB contents as a MIME string
        glb_mimetype = 'model/gltf-binary'
        glb_encoded = base64.b64encode(glb_contents).decode('utf-8')

        # Insert the MIME string into the collection
        document = {'filename': filename, 'glb': {'$type': glb_mimetype, '$binary': glb_encoded}}
        collection.insert_one(document)