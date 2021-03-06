import React from 'react';
import ToDo from './ToDo';
import { Card } from 'react-bootstrap';
 
const ToDoList = ({todos, removeTodo, completeTodo}) => {
   return (
    <div data-testid="todos">
    {todos.map((todo) => {
      return (
      <Card>
        <Card.Body>
          <ToDo
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          />
        </Card.Body>
      </Card>
  
    )})}
    
    </div>
   );
};
 
export default ToDoList;
