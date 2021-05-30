const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DB CONNECTION

//! GET Request to the Database
router.get('/', (req, res) => {
    // this will tell SQL that we want all tasks in the database and to sort by it's id number
    let queryText = 'SELECT * FROM "tasks" ORDER BY "id";';
    pool.query(queryText).then(result => {
    // sends back the results in an object
    res.send(result.rows);
    }).catch(error => {
        console.log('error getting tasks from DB', error);
        res.sendStatus(500);
    });
});

// POST
router.post('/', (req, res) => {
    let newToDo = req.body;
    console.log('adding new to do item', newToDo);
    let queryLine = `INSERT INTO "tasks" ( "item") VALUES($1);`
    pool.query(queryLine, [newToDo.item])
        .then((result) => {
            console.log('item added to database', result);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

// PUT
router.put('/:id', (req, res) => {
    let updateId = req.params.id;
    console.log('updating id', updateId);
    let queryText = `UPDATE "tasks" SET "completed" = NOT "completed" WHERE "id" = $1;`
    pool.query(queryText, [updateId])
        .then((result) => {
            console.log('task was updated', result);
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
        })
})


// // DELETE

router.delete('/:id', (req, res) => {
    let deleteId = req.params.id;
    console.log('removing id', deleteId);
    let queryText = `DELETE FROM "tasks" WHERE "id" = $1;`;
    pool.query(queryText, [deleteId])
        .then((result) => {
            console.log('task was deleted', result);
            res.sendStatus(204);
        }).catch((error) => {
            console.log(error);
        })
})

module.exports = router;