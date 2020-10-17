const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  console.log( 'in router.get,' );
    const queryText = `SELECT * FROM "genres" ORDER BY name ASC;`;
      pool.query( queryText )
          .then( ( result ) => {
              res.send( result.rows );
          })
          .catch( ( error ) => {
              console.log( `Error on query ${error}` );
              res.sendStatus( 500 );
          });
  });

  router.get('/:id', (req, res) => {
    console.log( 'in genre router, movie id to retrieve:', req.params.id );
    let movieId = req.params.id
    const queryText = `SELECT * FROM "movies"
    JOIN "movies_genres" 
    ON "movies_genres"."movie_id" = "movies"."id"
    JOIN "genres" 
    ON "movies_genres"."genre_id" = "genres"."id"
    WHERE "movies"."id" = $1;`;
    pool.query( queryText, [ movieId ] )
        .then( ( results ) => {
            res.send( results.rows );
        })
        .catch( ( error ) => {
            console.log(`Error on query ${error}`);
            res.sendStatus( 500 );
        });
  });
  

module.exports = router;