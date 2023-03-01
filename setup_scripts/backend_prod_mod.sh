
#CHANGE DATABASE CREDENTIALS
backend_config_file=$(pwd)/backend/app/endpoints/config/config_file.json

echo ${MONGO_IP_PROD}

sed -i \
s/'    "mongo_ip".*'/"    \"mongo_ip\":\ \"${MONGO_IP_PROD}\","/ \
${backend_config_file}

sed -i \
s/'    "mongo_port".*'/"    \"mongo_port\":\ \"${MONGO_PORT_PROD}\","/ \
${backend_config_file}

sed -i \
s/'    "mongo_username".*'/"    \"mongo_username\":\ \"${MONGO_USERNAME_PROD}\","/ \
${backend_config_file}

sed -i \
s/'    "mongo_pass".*'/"    \"mongo_pass\":\ \"${MONGO_PASS_PROD}\","/ \
${backend_config_file}

sed -i \
s/'    "mongo_auth_db".*'/"    \"mongo_auth_db\":\ \"${MONGO_AUTH_DB_PROD}\","/ \
${backend_config_file}

sed -i \
s/'    "database".*'/"    \"database\":\ \"${MONGO_DATABASE_PROD}\""/ \
${backend_config_file}


