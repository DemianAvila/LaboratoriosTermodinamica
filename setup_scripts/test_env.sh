FILE=$(pwd)/.env
if test -f "$FILE"; then
    echo "${FILE} exists"
    echo 'COPY FILE INTO PIPELINES SETUPS'
    cp $(pwd)/.env $(pwd)/setup_scripts/.env
else
    echo "${FILE} don't exists"
fi