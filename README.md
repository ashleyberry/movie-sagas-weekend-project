# Movie-Sagas
_Duration:_ Weekend Project

## Description
This is a movie management application that allows users to view movies that exist in our database. The app allows users to see details for each selected movie including genres associated with the movie as well as a movie poster. The user is also able to add information about a new movie which is added to our movie list.

In building this app, I used react-redux and connected a JSX-powered front-end through a node server and I practiced advanced relational database techniques to connect my app to an SQL database.

## Prerequisites
To run this app, you will need:
* Node.js
* Postgres

## Install

To run this application:
* Create a database in Postgres called `sagas_movies_weekend`
* Execute the SQL commands from `database.sql`
* Run `npm install` from the project root directory
* Run `npm run server` to start the server

Now that the server is running, open a new terminal tab with cmd + t.
* Run `npm run client` to start the react client app

## Usage
Scroll through the list of movies and click on one that interests you. You will be directed to a details page where you can read more details about the particular movie, as well as view its genre. Click `back to list` to return to the list view. At any time you can click on the `Add Movie` link in the footer to add your own movie to the database.

## Screenshot

![demo](./public/images/movie-sagas.gif)