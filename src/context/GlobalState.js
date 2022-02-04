import { useReducer, createContext, useState } from "react";
import { appReducer } from "./AppReducer";

export const GlobalContext = createContext(null);

const initialState = {
  userData: [],
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const initialUserState = { id: "", name: "", mobile: "", email: "" };
  const [user, setUser] = useState(initialUserState);

  const handleUserData = (event) => {
    const { name, value } = event.target;
    setUser((prevSate) => ({
      ...prevSate,
      [name]: value,
    }));
  };

  const resetFormData = () => {
    setUser(initialUserState);
  };

  const setUserToEdit = (userId) => {
    let userToBeEdited = state.userData.find((user) => user.id === userId);
    setUser(userToBeEdited);
  };

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const deleteUser = (userId) => {
    dispatch({
      type: "DELETE_USER",
      payload: userId,
    });
  };

  const updateUser = (userId, user) => {
    dispatch({
      type: "UPDATE_USER",
      payload: userId,
      user: user,
    });
  };

  const values = {
    userData: state.userData,
    resetFormData,
    user,
    addUser,
    deleteUser,
    updateUser,
    handleUserData,
    setUserToEdit,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
