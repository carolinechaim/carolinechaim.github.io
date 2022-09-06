# Para o desenvolvedor

## Setup 

### Virtual Environment

In order not to have conflicts between versions or libraries, we can create a virtual environment. To do this, enter the folder where you cloned the server and run the following command in the terminal:

```
$ python -m venv env 
```

#### Activating the virtual environment
Once created, you need to activate the virtual environment.

On Windows:
```
$ env\Scripts\activate
```

On Linux/MacOS:

```
$ . env/bin/activate
```
### Installing libraries

First, you need to install the custom test execution library. To do this, go to the ChallengeTestRunner folder and install the library:

```
$ cd ChallengeTestRunner
$ python setup.py install
```

Go back to the root of the application and install all the dependencies that are in the requirements.txt file:

```
$ cd ..
$ pip install -r requirements.txt
```

### Installing Poetry

In this project we use Poetry for dependency management. You can install it by following the instructions here: <https://python-poetry.org/docs/#installation>

With Poetry installed you can install the dependencies with:

```
$ poetry install 
```
Activating the virtual env with Poetry
Always activate the virtual env before starting to work:

```
$ poetry shell
```
### AWS SAM
Follow the instructions here: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

React Frontend
We use React to develop our frontend. To install it you must first install Node.js. Then, go to frontend directory and install all the dependencies:

```
$ cd frontend
```

```
$ npm install
```

#### Design

The font used for the logo is Gayathri.

#### Running server in dev mode
Run the server with:

```
$ python manage.py runserver --nostatic
```

You also have to run the simulated AWS lambda:

```
$ cd aws_lambda/sam-app/
```

```
$ sam local start-api
```

To update the react frontend, run:

```
$ cd frontend
```

```
$ npm run dev
```
If you are developing the frontend, the following will probably be useful:

```
$ cd frontend
```

```
$ npm run watch
```
Translation
Python Gym currently supports pt-BR and en-US. To translate the strings, run:

```
$ cd frontend
```

```
$ npm run translate
```
This command will generate the files frontend/src/locale/en/translation.json and frontend/src/locale/pt/translation.json. Just fill the empty values.

Updating AWS lambda code
Change directory to aws_lambda and run update.sh followed by prepare_zip.sh. Upload the generated zip file to AWS.

## Contributing 

### Fork 

To contribute to the server, fork the base repository bellow: 

https://github.com/Insper/servidor-de-desafios

You can find the issues and choose the ones you can solve it.

### Pull Request 

To push your commits and solutions, just create a pull request in the base repository. 

Also if you want to give some feedback about the software, is more than welcome.  