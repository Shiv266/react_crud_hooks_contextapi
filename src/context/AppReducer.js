export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        userData: [action.payload, ...state.userData],
      };
    case "DELETE_USER":
      const usersAfterDeleted = state.userData.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        userData: usersAfterDeleted,
      };
    case "UPDATE_USER":
      const updatedUser = state.userData.map((data) =>
        data.id === action.payload ? action.user : data
      );
      return {
        ...state,
        userData: updatedUser,
      };
  }
};
