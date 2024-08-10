#!/bin/bash
FILE=$(pwd)/env-example
ENV_FILE=$(pwd)/.env
if test -f "$FILE"; then
    echo "INFO: environment example file exists, testing if dev variables exists in environment file"
    #READ ALL THE LINES FROM THE EXAMPLE FILE
    while read line; 
        do
        variable=$(echo "$line" | sed 's/=.*//')
        #CHECK THAT THE ENV FILE HAS THE VARIABLE SET UP
        if [[ $variable == *"DEV" ]] 
            then
            #CHECK IF VARIABLE EXISTS IN ENV FILE
            file_line=$(cat ${ENV_FILE} | grep ${variable})
            value=$(echo "$file_line" | sed 's/.*=//')
            if [ -z "$value" ]
                then
                >&2 echo "ERROR: ${variable} is not being set with a value, this will cause errors in the execution of the software"
                exit 1
            fi
        fi
    done < $FILE
    echo "INFO: OK"
else
    echo "WARNING: env-example file doesn't exists, can't compare if the variables are being correctly setup"
fi