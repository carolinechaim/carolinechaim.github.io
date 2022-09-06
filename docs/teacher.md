## Adding new users

To add all users from the Blackboard file at once, download the list of students in CSV format available from Blackboard. Then just run the following command on the server, via SSH:

```
$ cd softdes
$ source venv/bin/activate
$ python manage.py batch_add_users users.csv 
```

To create a admin user to manage the exercises, run the command:

```
$ python manage.py createsuperuser
```
If you already have set up a virtual environment, you must activate it whenever you make any changes to the exercises:

Then, run the following command:
```
$ python manage.py runserver
```

This allows you to log into the Django admin (you can type in your browser: 'localhost:8000/admin/') To create the exercise, click 'Add' next to 'Programming exercises'. It will be necessary to define some characteristics:


## Adding new challenges