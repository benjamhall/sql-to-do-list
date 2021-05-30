const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');




// DB CONNECTION


// //! GET
// router.get('/', (req, res) => {
//     // this will tell SQL that we want all koalas in the database and to sort by it's id number
//     let queryText = 'SELECT * FROM "koalas" ORDER BY "id";';
//     pool.query(queryText).then(result => {
//     // sends back the results in an object
//     res.send(result.rows);
//     }).catch(error => {
//         console.log('error getting koalas', error);
//         res.sendStatus(500);
//     });
// });

// // POST
// router.post('/', (req, res) => {
// // console log it to make sure it received from client
//     console.log('req.body is ...', req.body);

// // need to specify what we are sending to sql in sql terms and sanitize it
//     let queryText = `INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes") 
//     VALUES ($1, $2, $3, $4, $5);`;

// // insert values from user object now that it has been sanitized
//     let values = [req.body.name, req.body.gender, req.body.age, req.body.readyForTransfer, req.body.notes];

// // send the information to the database
// pool.query(queryText, values)
//     .then( result => {
//         console.log('Response from sql', result);
//         res.sendStatus(201);
//     }).catch( err => {
//         console.log('The POST route server error is', err);
//         res.sendStatus(500);
//     });

// });

// // PUT

// koalaRouter.put('/:id', (req, res) => {
//     const koalaId = req.params.id;

//     //Change the status of the koala to mark ready
//     let koalaReady = req.body.koalaReady;

//     let queryString = '';

//     if (koalaReady === true) {
//         queryString = `UPDATE "koalas" SET "ready_to_transfer" = NOT "ready_to_transfer" WHERE "koala".id = $1;`;
//     } else {
//         // If the koalaReady is somehow not what we expect, we reject the response and send
//         // back a 500 error
//         res.sendStatus(500);
//         return; //early exit since it's an error!
//     }
//     pool.query(queryString, [koalaId])
//         .then(response => {
//             console.log(response.rowCount);
//             res.sendStatus(202)
//         })
//         .catch(err => {
//             console.log('This is frustrating', err);
//             res.sendStatus(500);
//         })

// })

// // DELETE

module.exports = router;