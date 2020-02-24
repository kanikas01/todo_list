import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// Get all todos
const GET_TODOS = gql`
  query getTodos {
    todos {
      done
      id
      text
    }
  }
`;

// Toggle todo 'done' state (true/false)
const TOGGLE_TODO = gql`
  mutation toggleTodo($id: uuid!, $done: Boolean!) {
    update_todos(where: { id: { _eq: $id } }, _set: { done: $done }) {
      returning {
        done
        id
        text
      }
    }
  }
`;

// Add new todo
const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    insert_todos(objects: { text: $text }) {
      returning {
        done
        id
        text
      }
    }
  }
`;

// Delete todo
const DELETE_TODO = gql`
  mutation deleteTodo($id: uuid!) {
    delete_todos(where: { id: { _eq: $id } }) {
      returning {
        done
        id
        text
      }
    }
  }
`;

function App() {
  const [todoText, setTodoText] = React.useState("");
  const { data, loading, error } = useQuery(GET_TODOS);
  const [toggleTodo] = useMutation(TOGGLE_TODO);
  const [addTodo] = useMutation(ADD_TODO, {
    onCompleted: () => setTodoText("")
  });
  const [deleteTodo] = useMutation(DELETE_TODO);
  const bodyStyling =
    "vh-100 code flex flex-column items-center bg-dark-blue white pa3 fl-1";

  async function handleToggleTodo({ id, done }) {
    const data = await toggleTodo({ variables: { id: id, done: !done } });
    console.log("toggled todo", data);
  }

  async function handleAddTodo(event) {
    event.preventDefault();
    if (!todoText.trim()) return;
    const data = await addTodo({
      variables: { text: todoText },
      refetchQueries: [{ query: GET_TODOS }]
    });
    console.log("added todo", data);
  }

  async function handleDeleteTodo({ id }) {
    const isConfirmed = window.confirm("Do you want to delete this todo?");
    if (isConfirmed) {
      const data = await deleteTodo({
        variables: { id: id },
        update: cache => {
          const prevData = cache.readQuery({ query: GET_TODOS });
          const newTodos = prevData.todos.filter(todo => todo.id !== id);
          cache.writeQuery({ query: GET_TODOS, data: { todos: newTodos } });
        }
      });
      console.log("deleted todo", data);
    }
  }

  if (loading)
    return (
      <div className={bodyStyling}>
        Loading todos...
        <p className="fl w-50">
          The database for this app uses free heroku hosting, and will go to
          sleep after an hour of inactivity. Thus, if the app hasn't been
          visited recently then it can take a few moments for the DB to wake up
          and send the todo list info. Thank you for your patience!
        </p>
      </div>
    );
  if (error) return <div className={bodyStyling}>Error fetching todos!</div>;

  return (
    <div className={bodyStyling}>
      <h1 className="f2-l">
        GraphQL Checklist{" "}
        <span role="img" aria-label="Checkmark">
          ✅
        </span>
      </h1>
      <h5 className="tc mt0 fl w-50">
        (Doubleclick on an item to cross it off, or click the '&times;' to
        remove it)
      </h5>
      {/* Todo Form */}
      <form onSubmit={handleAddTodo} className="mb3">
        <input
          className="pa2 f4 b--dashed"
          type="text"
          placeholder="write your todo"
          onChange={event => setTodoText(event.target.value)}
          value={todoText}
        />
        <button className="pa2 f4 bg-green" type="submit">
          Create
        </button>
      </form>
      {/* Todo List */}
      <div className="flex items-center justify-center flex-column">
        {data.todos.map(todo => (
          <p onDoubleClick={() => handleToggleTodo(todo)} key={todo.id}>
            <span className={`pointer list pa1 f3 ${todo.done && "strike"}`}>
              {todo.text}
            </span>
            <button
              className="bg-transparent nt bn f4"
              onClick={() => handleDeleteTodo(todo)}
            >
              <span className="red">&times;</span>
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
