var todolist = {
  todos: [],
  displayToDos: function(){
    if (this.todos.length === 0){
      console.log("Empty todolist");
    } else{
      for (var i = 0; i < this.todos.length; i++){
        if (this.todos[i].completed === true){
          console.log('(x)', this.todos[i].todoText);
        } else  {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addToDo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayToDos();
  },
  changeToDo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayToDos();
  },
  deleteToDo: function(position){
    this.todos.splice(position, 1);
    this.displayToDos();
  },
  toggleCompleted: function(position){
    this.todos[position].completed = !this.todos[position].completed;
    this.displayToDos();
  },
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0; i< totalTodos; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }
    // Case 1: If everything true, make everything false
    if (completedTodos === totalTodos){
      for (var i = 0; i<totalTodos; i++){
        this.todos[i].completed = false;
        }
      } else {
    // Case 2: Otherwise, make everything true
      for (var i = 0; i<totalTodos; i++){
        this.todos[i]. completed = true;
      }
    }
    this.displayToDos();
  }
};

var handlers = {
  displayToDos: function(){
  todolist.displayToDos();
  },
  changeTodos: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todolist.changeToDo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    },
  deleteTodos: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todolist.deleteToDo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todolist.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll: function(){
    todolist.toggleAll(); },
    addTodos: function(){
      var addTodoTextInput = document.getElementById('addTodoTextInput');
      todolist.addToDo(addTodoTextInput.value);
      addTodoTextInput.value = '';
      }
};