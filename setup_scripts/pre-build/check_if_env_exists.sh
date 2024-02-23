#!/bin/bash
FILE=$(pwd)/.env
echo "INFO: Checking if .env file exists"

if test -f "$FILE"; then
    echo "INFO: .env exists"
    echo "INFO: OK"

else
    >&2 echo "ERROR: .env does'nt exists, create one"
    exit 1
fi