include .env
export


deploy-dev:
	bash setup_scripts/pre-build/check_if_env_exists.sh
	bash setup_scripts/pre-build/check_dev_variables.sh
	bash setup_scripts/pre-build/db_dev.sh
	bash setup_scripts/pre-build/backend_dev_mod.sh
	bash setup_scripts/pre-build/frontend_dev_mod.sh
	docker compose -f setup_scripts/dev/docker-compose-dev.yml up -d

logs:
	docker compose -f setup_scripts/dev/docker-compose-dev.yml logs

kill-dev:
	docker rm lab_db_dev --force
	docker rm lab_backend_dev --force
	docker rm lab_frontend_dev --force
	docker rm lab_upload3d_dev --force
	sudo rm -rf ./db/data_storage/*

restart-dev:
	make kill-dev
	make deploy-dev
