# Express.js Movie App

This app fetches some movie information (year, actors, awards etc) based on user input and save all the information in the DB.\
Additionaly, using the 'option' dropdown, the user can check the details, add a comment and view other users comments.\
'Comments' in the navbar, display all the comments from the DB regardless of the movie title.\
Specific movie comments, are accessable from the movie dropdown.

## Basic Information
This my 2nd Express app.

What I wanted to achieve here, is to use Node/Express for the whole app, without Front End JS.\
There are places, where I didn't know how to properly handle several things (mainly with Sequelize) as I've just started learning it.

For example, in '/comments' route, where all the comments are displayed, I didn't include the movie title for specific comment, because I didn't know how to query the 'movies' table from the 'comments' table. In sql it would like this:

SELECT movies.movies.title FROM movies.movies\
	INNER JOIN movies.comments ON movies.movies.id = movies.comments.movieId\
WHERE movies.comments.movieId = 3;

## Getting Started

To run it locally, download the repo and run:\
npm install

If you have Postgres already installed, change your database, user & password in secret/database.js file./
Sequelize will create all the tables and relations for you.

Now, if you run:/
npm start

the application should start.

## Token
You can use mine.

### Installing Postgresql

If you don't have Postgres installed, follow the below:

psql -U postgres

This command should open postgres interactive shell. If you see at the bottom of your terminal this:

postgres=#

... it means that everything is ok. Otherwise visit this website:

https://gist.github.com/15Dkatz/321e83c4bdd7b78c36884ce92db26d38\
... and follow a step by step tutorial how to install on Mac & Windows

Next step is to install Postgres.app. Go to:

https://postgresapp.com/

Once installation is complete, click blue button 'initialize' in the upper right corner of the screen.\
When is done, go to you terminal and type:

psql -U postgres

This allowes you to log in to the psql interactive shell as the user named 'postgres'. This is a default user.\
Different user can have different access to different databases or different level of authorithy.

### Creating new postgres database and user

The line below creates database (somedb) for a user named (postgres)\
createdb -U postgres somedb

To link the user (user named postgres) with the db type:\
psql -U postgres somedb

Now you should be in psql interactive shell

To create new user (still in psql shell) with full access type:\
CREATE USER new_user WITH SUPERUSER PASSWORD 'password1';

This message should appear:\
CREATE ROLE

If not, repeat the above.

### Connecting the app to database
Go to 'secret' folder and replace 'database', 'user', 'password' with the ones which were just created above.

const sequelize = new Sequelize('database', 'user', 'password', {
  dialect: 'postgres', host: 'localhost'
});

## Running the tests

Unfortunetly I have never written any test, therefore I skipped them.

## Deployment

The app is up and running. Can be viewed here:\
https://movies-fetch.herokuapp.com/movies

## Built With

* Express.js - app handling
* Pug - template handling
* Sequelize - CRUD & DB connection handling

## Authors

* **Paweł Góźdź**

## Pattern

The project uses MVC pattern
