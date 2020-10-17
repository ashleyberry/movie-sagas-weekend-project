const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', async (req, res) => {
    pool.query(`SELECT * FROM "movies";`)
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in SELECT query', error);
            res.sendStatus(500);
        });
});

router.get('/details/:id', async (req, res) => {
    pool.query('SELECT * FROM "movies" WHERE "id"=$1 LIMIT 1;', [req.params.id])
        .then(result => res.send(result.rows[0]))
        .catch(error => {
            console.log('error in SELECT query', error);
            res.sendStatus(500);
        });
});

router.get('/genres/:id', async (req, res) => {
    pool.query(`SELECT * FROM "movies_genres"
        LEFT OUTER JOIN "genres" ON "genres".id="movies_genres".genre_id
        WHERE "movie_id"=$1;`, [req.params.id])
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in SELECT query', error);
            res.sendStatus(500);
        });
});

router.put('/:id', async (req, res) => {
    pool.query(`UPDATE "movies"
        SET "title"=$1,
        "description"=$2
        WHERE "id"=$3;`,
        [req.body.title, req.body.description, req.params.id])
        .then(result => res.send(result.rows[0]))
        .catch(error => {
            console.log('error in SELECT query', error);
            res.sendStatus(500);
        });
});

module.exports = router;