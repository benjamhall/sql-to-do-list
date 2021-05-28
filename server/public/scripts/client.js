
// // const { Router } = require("express");

// console.log( 'js' );

// //#region ⬇⬇ All document setup below:
// console.log( 'JavaScript is working.' );
// $( document ).ready( function(){
//   console.log( 'jQuery is working.' );
//   // ⬇ Establish Click Listeners call:
//   setupClickListeners()
//   // ⬇ Load existing koalas on page load:
//   getKoalas();
// }); // End document ready function. 
// //#end region ⬆⬆ All document setup above. 


// //#region ⬇⬇ All functions below:
// // ⬇ Click listener setup below:
// function setupClickListeners() {
//   $( '#addButton' ).on( 'click', addKoala)
// } 

// function addKoala(){
//     console.log( 'In addButton on click' );
//     // get user input and put in an object
//     // NOT WORKING YET :(
//     // using a test object
//     let koalaToSend = {
//       name: $('#nameIn').val(),
//       age: $('#ageIn').val(),
//       gender: $('#genderIn').val(),
//       readyForTransfer: $('#readyForTransferIn').val(),
//       notes: $('#notesIn').val()
//     };
//     //need to send the user input to the server
//     $.ajax({
//       method: 'POST',
//       url: '/koalas',
//       data: koalaToSend
//     }).then( response => {
//       console.log('Posted koalas to server. Here is the response', response);
//       // empty the user input fields 
//       $('input').val('');
//       // call saveKoala with the new obejct
//     getKoalas();
//     }).catch( err => {
//       console.log('The koala was not added to the server', err);
//     });
// }; // End #addButton function. 


// // ⬇ Function to render page below: 
// function renderNow( koalas ) {
//   console.log( 'In readyNow' );
//   // ⬇ Emptying out the DOM table to load to:
//   $( '#viewKoalas' ).empty();
//   // ⬇ Creating for loop to append with:
//   for ( let i = 0; i < koalas.length; i++ ) {
//     // ⬇ Declaring variable to hold each koala on loop:
//     let koala = koalas[i];
//     // ⬇ For each koala, append new row to table: 
//     $( '#viewKoalas' ).append(`
//       <tr>
//         <td>${koala.name}</td>
//         <td>${koala.gender}</td>
//         <td>${koala.age}</td>
//         <td>${koala.ready_to_transfer}</td>
//         <td>${koala.notes}</td>
//         <td><button class="readyButtons" data-id="${koala.id}">Mark Ready</button></td>
//         <td><button class="removeButtons" data-id="${koala.id}">Remove</button></td>
//       </tr>
//     `); // End append.
//   } // End for loop.
// } // End renderNow.

// function getKoalas(){
//   console.log( 'In getKoalas' );
//   // ajax call to server to get koalas
//   $.ajax({
//     type: 'GET',
//     url: '/koalas'
//   }).then(function(response) {
//     console.log(response);
//     renderNow(response);
//   }).catch(function(error){
//     console.log('error in GET', error);
//   });
// } // end getKoalas

// // function saveKoala( newKoala ){
// //   console.log( 'In saveKoala, newKoala is:', newKoala );
// //   // ajax call to server to get koalas
 
// // }

// /**
//  * Change the status of a Koala to signify they are ready for transfer 
//  * @param {number} koalaId
//  * @param {boolean} true
//  */

// function markKoalaReady(koalaId) {
//   $.ajax({
//     method: 'PUT',
//     url: `/koala/${koalaId}`,
//     data: {
//       koalaReady: true
//     }
//   })
//     .then(response => {
//       console.log('koala is ready');
//       getKoalas();
//     })
//     .catch(err => {
//       console.log('');
//       alert('There is a problem trying to get koala ready for transfer');
//     });
// }

// //#endregion ⬆⬆ All functions above. 

