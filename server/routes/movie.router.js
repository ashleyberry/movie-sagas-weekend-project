const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`;

  // FIRST QUERY MAKES MOVIE
  pool
    .query(insertMovieQuery, [
      req.body.title,
      req.body.poster,
      req.body.description,
    ])
    .then((result) => {
      console.log("New Movie Id:", result.rows[0].id); //ID IS HERE!
      const createdMovieId = result.rows[0].id;
      const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `;
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      pool
        .query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id])
        .then((result) => {
          //Now that both are done, send back success!
          res.sendStatus(201);
        })
        .catch((err) => {
          // catch for second query
          console.log(err);
          res.sendStatus(500);
        });
      // Catch for first query
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// get all movies from the database
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "movies" ORDER BY "title" ASC;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    // catch for query
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// get selected movie from the database
router.get("/:id", (req, res) => {
  let movieId = req.params.id;
  const queryText = `SELECT * FROM "movies"
  WHERE "movies"."id" = $1;`;
  pool
    .query(queryText, [movieId])
    .then((results) => {
      res.send(results.rows);
    })
    // catch for query
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// PUT Route
router.put("/:id", (req, res) => {
  const movieId = req.params.id;
  for (const movieItem of movies) {
    if (movieItem.id === movieId) {
      if (movieId !== "") {
        movieItem.title = movieId.title;
      }
    }
  }
});

module.exports = router;
