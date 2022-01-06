/* Partial<Type> */

interface Todo {
    title: string;
    description: string;
  }
   
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }
   
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
   
  const todo2 = updateTodo(todo1, {
    description: "throw out trash",
  });


  /* Readonly<Type> */

  interface Todo1 {
    title: string;
  }
   
  const todo: Readonly<Todo1> = {
    title: "Delete inactive users",
  };
   
  //todo.title = "Hello";
  // Cannot assign to 'title' because it is a read-only property.

/* NonNullable<Type> */

type T01 = NonNullable<string | number | undefined>;
     
type T02 = string | number
type T11 = NonNullable<string[] | null | undefined>;
     
type T12 = string[]