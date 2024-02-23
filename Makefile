include .env 
export

build-dev:
	bash setup_scripts/pre-build/check_if_env_exists.sh 
	bash setup_scripts/pre-build/check_dev_variables.sh 
	docker compose -f setup_scripts/dev/docker-compose-dev.yml up -d

preparare_env:
	. setup_scripts/test_env.sh

data-restart:
	docker rm laboratoriostermodinamica-backend-1 --force 
	docker rm laboratoriostermodinamica-database-1 --force
	docker rm laboratoriostermodinamica-frontend-1 --force
	sudo rm -rf db/data_storage/*
	docker compose up -d

restart:
	docker compose restart

build:
	docker compose build

up:
	docker compose up -d

kill:
	docker rm laboratoriostermodinamica-backend-1 --force 
	docker rm laboratoriostermodinamica-database-1 --force
	docker rm laboratoriostermodinamica-frontend-1 --force	

backend_prod:
	. setup_scripts/backend_prod_mod.sh

backend_dev:
	. setup_scripts/backend_dev_mod.sh

frontend_prod:
	. setup_scripts/frontend_prod_mod.sh

frontend_dev:
	. setup_scripts/frontend_dev_mod.sh