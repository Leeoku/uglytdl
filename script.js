var todolist = {
  todos: [],
  addToDo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  // Replaced with the view below
  // displayToDos: function(){
  //   if (this.todos.length === 0){
  //     console.log("Empty todolist");
  //   } else{
  //     for (var i = 0; i < this.todos.length; i++){
  //       if (this.todos[i].completed === true){
  //         console.log('(x)', this.todos[i].todoText);
  //       } else  {
  //         console.log('( )', this.todos[i].todoText);
  //       }
  //     }
  //   }
  // },
  changeToDo: function(position, todoText){
    this.todos[position].todoText = todoText;
  },
  deleteToDoEntry: function(position){
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position){
    this.todos[position].completed = !this.todos[position].completed;
  },
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // for (var i = 0; i< totalTodos; i++){
    //   if (this.todos[i].completed === true){
    //     completedTodos++;
    //   }
    // }

    this.todos.forEach(function(todo){
      if (todo.completed === true){
        completedTodos++;
      }
    });
    // Case 1: If everything true, make everything false
    // if (completedTodos === totalTodos){
    //   this.todos.forEach(function(todo){
    //     todo.completed = false;
    //   });
    //   // for (var i = 0; i<totalTodos; i++){
    //   //   this.todos[i].completed = false;
    //   //   }
    //   } else {
    // // Case 2: Otherwise, make everything true
    //   // for (var i = 0; i<totalTodos; i++){
    //   //   this.todos[i].completed = true;
    //   // }
    //   this.todos.forEach(function(todo){
    //     todo.completed = true;
    //   });
    // }
    this.todos.forEach(function(todo){
      // CASE 1 IF EVERYTHING TRUE MAKE FALSE
      if (completedTodos === totalTodos){
        todo.completed = false;
      // CASE 2
      } else  {
        todo.completed = true;
      }
    });
  }
};

var handlers = {
  addTodos: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todolist.addToDo(addTodoTextInput.value);
    view.displayTodos();
  },
  changeTodos: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todolist.changeToDo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
    },
  deleteTodos: function(position){
    todolist.deleteToDoEntry(position);
    view.displayTodos();
    },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todolist.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function(){
    todolist.toggleAll(); 
    view.displayTodos();
  }
};

var view = {
  displayTodos: function(){
    // Initiate the UL and make an li depending on the lenght
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    todolist.todos.forEach(function(todo, position){
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      if (todo.completed === true){
        todoTextWithCompletion = '(x)' + todo.todoText + ' ';
      } else {
        todoTextWithCompletion = '( )' + todo.todoText + ' ';
      }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
    // for (var i = 0; i < todolist.todos.length; i++){
    //   var todoLi = document.createElement('li');
    //   var todo = todolist.todos[i];
    //   var todoTextWithCompletion = '';
    //   if (todo.completed === true){
    //     todoTextWithCompletion = '(x)' + todo.todoText + ' ';
    //   } else {
    //     todoTextWithCompletion = '( )' + todo.todoText + ' ';
    //   }
    //   todoLi.id = i;
    //   todoLi.textContent = todoTextWithCompletion;
    //   todoLi.appendChild(this.createDeleteButton());
    //   todosUl.appendChild(todoLi);
    // }
  },
  createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton'
    return deleteButton;
  },
  setUpEventListeners: function(){
    var todosUl = document.querySelector('ul')
    todosUl.addEventListener('click', function(event){
    // clicked element
    var elementClicked = event.target;

    // check if element clicked is a delete button, then run deleteTodo handler
    if (elementClicked.className === 'deleteButton'){
      handlers.deleteTodos(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();