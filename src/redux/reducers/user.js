import { v4 as uuidv4 } from "uuid";
export default function taskReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_USER":
      // Agregar al array de tareas la tarea del action.payload.
      // Retornar el nuevo estado.
      const newUser = {
        id: uuidv4(),
        token: action.token,
        user: action.user,
      };
      return newUser;
    case "REMOVE_USER":
      const emptyState = {};
      return emptyState;
    default:
      return state;
  }
}
