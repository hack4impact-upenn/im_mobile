# Internet Monitor - Internet Weather App [![Circle CI](https://circleci.com/gh/hack4impact/berkman.svg?style=svg)](https://circleci.com/gh/hack4impact/berkman)

### Synopsis
In partnership with the [The Berkman Klein Center for Internet & Society at Harvard University](https://cyber.harvard.edu/).

> Our goal is to create a kind of "internet weather app," a component of our larger [Internet Monitor project](https://thenetmonitor.org/) that will allow users of mobile devices to check the status of the internet access, censorship, cybersecurity climates around the world, with both global and individual country views. We think this will be hugely valuable in spreading awareness of internet freedom and access issues, as well as providing convenient access to timely, high-quality data to journalists, researchers, and advocates. The app will provide, simple, striking data-rich visualizations, while being as easy to understand and use as an actual weather app. It will grab all the data it needs from our existing internet monitor api server.

### What's included?
* Blueprints
* User and permissions management
* Flask-SQLAlchemy for databases
* Flask-WTF for forms
* Flask-Assets for asset management and SCSS compilation
* Flask-Mail for sending emails
* gzip compression
* gulp autoreload for quick static page debugging

### Setting up
#### Clone the repo
```
$ git clone https://github.com/hack4impact/berkman.git
$ cd berkman
```

#### Initialize
1. Initialize a virtualenv and set up local redis storage.

   `$ make install`
2. Activate your virtual envronment. (Can use different command if you have another preferred way of activating your virtual enviroment. If this doesn't work, try `source ENV/bin/activate` or `source venv/bin/activate`).

    `$ source env/bin/activate`
3. Install dependencies.

    `$ make pip`

#### Run
Create the database, other setup (e.g. creating roles in database), add fake data to the database (optional -- can remove `python manage.py add_fake_data` from make rule `run`)

With your virtual environment activated: (e.g. `$ source env/bin/activate`)
```
$ make run
```

### Team Members
- Nancy Wong
- Natasha Narang
- Kasra Koushan

### Boilerplate Project Structure (may not be updated along with project)
```
├── Procfile
├── README.md
├── app
│   ├── __init__.py
│   ├── account
│   │   ├── __init__.py
│   │   ├── forms.py
│   │   └── views.py
│   ├── admin
│   │   ├── __init__.py
│   │   ├── forms.py
│   │   └── views.py
│   ├── assets
│   │   ├── scripts
│   │   │   ├── app.js
│   │   │   └── vendor
│   │   │       ├── jquery.min.js
│   │   │       ├── semantic.min.js
│   │   │       └── tablesort.min.js
│   │   └── styles
│   │       ├── app.scss
│   │       └── vendor
│   │           └── semantic.min.css
│   ├── assets.py
│   ├── decorators.py
│   ├── email.py
│   ├── main
│   │   ├── __init__.py
│   │   ├── errors.py
│   │   ├── forms.py
│   │   └── views.py
│   ├── models.py
│   ├── static
│   │   ├── fonts
│   │   │   └── vendor
│   │   ├── images
│   │   └── styles
│   │       └── app.css
│   ├── templates
│   │   ├── account
│   │   │   ├── email
│   │   │   ├── login.html
│   │   │   ├── manage.html
│   │   │   ├── register.html
│   │   │   ├── reset_password.html
│   │   │   └── unconfirmed.html
│   │   ├── admin
│   │   │   ├── index.html
│   │   │   ├── manage_user.html
│   │   │   ├── new_user.html
│   │   │   └── registered_users.html
│   │   ├── errors
│   │   ├── layouts
│   │   │   └── base.html
│   │   ├── macros
│   │   │   ├── form_macros.html
│   │   │   └── nav_macros.html
│   │   ├── main
│   │   │   └── index.html
│   │   └── partials
│   │       ├── _flashes.html
│   │       └── _head.html
│   └── utils.py
├── config.py
├── manage.py
├── requirements
│   ├── common.txt
│   └── dev.txt
└── tests
    ├── test_basics.py
    └── test_user_model.py
```

### Contributing
Contributions are welcome! Please refer to our [Code of Conduct](./CONDUCT.md) for more information.

### License
[MIT License](LICENSE.md)
