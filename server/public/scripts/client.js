
// #region ⬇⬇ All document setup below:
console.log('JavaScript is working.');
$( document ).ready( function(){
  console.log('jQuery is working.');
// ⬇ call Click Listener function:
  setupClickListeners();
// ⬇ Load existing tasks on page load:
  getTasks();
}); // End document ready function. 
//#end region ⬆⬆ All document setup above. 


//#region ⬇⬇ All functions below:
// ⬇ Click listener setup below:
function setupClickListeners() {
  $('#addButton').on('click', addTasks);
  $('.allTasks').on('click', '.checkBox', completedTask);
  $('.allTasks').on('click', '.removeBtn', removeItem);

} 

function addTasks(){
    console.log( 'In addButton on click' );
    // get user input and put in an object
    // using a test object
    let newTask = {
      item: $('#taskIn').val()
    };
    //need to send the user input to the server
    $.ajax({
      method: 'POST',
      url: '/tasks',
      data: newTask
    }).then( response => {
      console.log('Posted tasks to server. Here is the response', response);
      // empty the user input fields 
      $('#taskIn').val('');
      // call getTasks with the new object
    getTasks();
    }).catch( err => {
      console.log('The task was not added to the server', err);
    });
}; // End #addButton function. 


// ⬇ Function to render page below: 
function renderNow(taskArray) {
  console.log('In readyNow');
  // ⬇ Emptying out the DOM table to load to:
  $('#todoList').empty();
  $('#tasksCompleted').empty();

  // ⬇ Creating for loop to append to DOM:
  for (const item of taskArray) {
    let newTask = $(`<li class="taskToDo">${item.item}<li>`);
    newTask.data('id, item.id');
    newTask.append(`<button class="removeBtn btn btn-danger">Remove</button>`);
    if (item.completed === false){
      newTask.prepend(`<input type="checkbox" class="checkBox">`);
      $('#todoList').append(newTask);
    } else if (item.completed === true){
      newTask.prepend(`<input type="checkbox" checked="checked" class="checkBox">`);
      $('#tasksCompleted').append(newTask);
    }
  } // End for of loop.
} // End renderNow.

function getTasks(){
  console.log('In getTasks');
  // ajax call to server to get tasks 
  $.ajax({
    type: 'GET',
    url: '/tasks'
  }).then(function(response) {
    console.log(response);
    renderNow(response);
  }).catch(function(error){
    console.log('error in GET', error);
  });
} // end getTasks


// ⬇ Function to complete task
function completedTask() {
  let updateId = $(this).closest('li').data('id');
  console.log('completing task', updateId);
  
  $.ajax({
    method: 'PUT',
    url: `/tasks/${updateId}`,
    data: {
      taskComplete: true
    }
  })
    .then(response => {
      console.log('Task complete');
      getTasks();
    })
    .catch(err => {
      console.log('error', err);
      alert('Problem with completing task');
    });
}

// ⬇ Function to remove item from DOM
function removeItem() {
  let idToRemove = $(this).closest('li').data('id');
  let initTask = $(this).closest('li').text();
  let taskToRemove = initTask.replace('Remove', '');
  console.log('item is being removed', idToRemove);
  sweetAlert({
    title: "Do you want to remove this task?",
    text: `${taskToRemove}`,
  })
    .then((willDelete) => {
      if (willDelete) {
        fullyDelete(idToRemove);
      } else {
        alert("Keep working hard");
      }
    });
}
// ⬇ Function to delete from Database

function fullyDelete(deleteId) {

  $.ajax({
    method: 'DELETE',
    url: `/tasks/${deleteId}`,
  }).then((response) => {
    console.log('task removed', response);
    getTasks();
  }).catch((error) => {
    console.log(error);
    alert('Unfortunately this item was not deleted, please try again.');
  })
}
//#end region ⬆⬆ All functions above. 