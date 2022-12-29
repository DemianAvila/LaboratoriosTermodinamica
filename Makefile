data_restart:
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
	docker rm $(docker ps -aq) --force

