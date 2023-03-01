frontend_config_path=$(pwd)/laboratorios_frontend/src/store/modules/config_info.js
replace_for="api_url: \"${API_URL_DEV}\","

sed -i \
"s|api_url:.*|${replace_for}|"  \
${frontend_config_path}

url_path=$(pwd)/laboratorios_frontend/vue.config.js
url_reconfig='//.*publicPath: process.env.NODE_ENV === "production" ? "/LaboratoriosTermodinamica/" : "/",'
url_config='publicPath: process.env.NODE_ENV === "production" ? "/LaboratoriosTermodinamica/" : "/",'


sed -i \
"s|${url_config}|${url_reconfig}|"  \
${url_path}