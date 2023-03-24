import os
import json
from pymongo import MongoClient
import logging

def get_mongo_client():
    path = os.path.dirname(os.path.abspath(__file__))
    path = os.path.join(path, "config_file.json")
    #READ THE JSON FILE
    mongo_params = json.load(open(path, "r"))
    uri = f"mongodb://{mongo_params['mongo_username']}:"
    uri += f"{mongo_params['mongo_pass']}@"
    uri += f"{mongo_params['mongo_ip']}:{mongo_params['mongo_port']}"
    uri += f"/?authMechanism=DEFAULT"
    #uri += f"&authSource={mongo_params['mongo_auth_db']}"
    client = MongoClient(uri)
    return client[mongo_params["database"]]



    