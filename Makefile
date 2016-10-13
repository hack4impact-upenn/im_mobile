.PHONY: clean run

install:
	# Initialize a virtual environment
	pip install --upgrade pip
	pip install --upgrade virtualenv
	virtualenv env
	# Setup local redis storage
	brew update; brew install redis
	gem install foreman
	# Turn on venv before installing dependencies locally
	echo 'Activate your virtual environment with "source env/bin/activate"'
	echo 'Then, run "make pip"'

pip:
	# Install dependencies
	pip install -r requirements/common.txt
	pip install -r requirements/dev.txt

run: clean
	# Set up and run server with fake data
	python manage.py recreate_db
	python manage.py setup_dev
	python manage.py add_fake_data
	foreman start -f Local

clean:
	find . -name '*.pyc' -delete
