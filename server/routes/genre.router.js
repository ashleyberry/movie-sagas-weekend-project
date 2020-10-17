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

module.exports = router;