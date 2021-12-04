import { v4 as uuidv4 } from "uuid";
export default function taskReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_USER":
      // Agregar al array de tareas la tarea del action.payload.
      // Retornar el nuevo estado.
      const newUser = {
        id: uuidv4(),
        token: action.payload,
      };
      return newUser;
    case "REMOVE_USER":
      // Remover del array de tareas la tarea del action.payload.
      // Retornar el nuevo estado.
      break;
    default:
      return state;
  }
}
