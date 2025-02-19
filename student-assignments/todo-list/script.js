function populateTodoList( todos ) {
  let list = document.getElementById( 'todo-list' );
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  let input = document.querySelector( "#todoInput" );
  const addButton = document.querySelector( ".btn" );
  addButton.addEventListener( "click", () => {
    let li = document.createElement( "li" );
    li.innerText = input.value;
    input.value = "";
    li.classList.add( "list-group-item", "d-flex", "justify-content-between", "align-items-center" );
    list.append( li );
    const span = document.createElement( "span" );
    span.classList.add( "badge", "bg-primary", "rounded-pill" );
    li.append( span );
    const completed = document.createElement( "i" );
    completed.classList.add( "fa", "fa-check" );
    completed.ariaHidden = "true";
    const deleted = document.createElement( "i" );
    deleted.classList.add( "fa", "fa-trash" );
    deleted.ariaHidden = "true";
    span.append( completed );
    span.append( deleted );
    const before = document.createElement( "before" );
    completed.append( before );
    const before1 = document.createElement( "before" );
    deleted.append( before1 );
    // This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
    addNewTodo;

    let lis = document.querySelectorAll( "li" );
    let completeds = document.querySelectorAll( ".fa-check" );
    console.log( completeds );

    for ( let i = 0; i < completeds.length; i++ ) {
      completeds[ i ].addEventListener( "click", () => {
        if ( todos[ i ].completed == false ) {
          lis[ i ].style.textDecoration = "line-through";
          todos[ i ].completed = true;
        } else if ( todos[ i ].completed == true ) {
          lis[ i ].style.textDecoration = "none";
          todos[ i ].completed = false;
        }

      } );

    }

  } );

}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: 'Wash the dishes', completed: false },
  { task: 'Do the shopping', completed: false },
];

populateTodoList( todos );


function addNewTodo( event ) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let input = document.querySelector( "#todoInput" );
  let task = input.value;
  todos.push( { task, completed: false } );
}

console.log( todos );



// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
