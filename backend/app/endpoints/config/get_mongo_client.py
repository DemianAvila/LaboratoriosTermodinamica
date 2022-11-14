import os
import json
from pymongo import MongoClient

def get_mongo_client():
    path = os.path.dirname(os.path.abspath(__file__))
    path = os.path.join(path, "config_file.json")
    #READ THE JSON FILE
    mongo_params = json.load(open(path, "r"))
    client = MongoClient(
        f"mongodb://{mongo_params['mongo_username']}:{mongo_params['mongo_pass']}@{mongo_params['mongo_ip']}:{mongo_params['mongo_port']}"
    )
    return client


    