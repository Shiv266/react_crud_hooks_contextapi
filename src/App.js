import "./App.css";
import UserList from "./components/UserList";
import AddOrEditUser from "./components/AddOrEditUser";
import { useState } from "react";
import { GlobalContextProvider } from "./context/GlobalState";

function App() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isEditUser, setIsEditUser] = useState(false);

  return (
    <div className="max-w-5xl mt-5 mx-auto px-4 sm:px-6 lg:px-8">
      <GlobalContextProvider>
        <div className="max-w-3xl  mx-auto">
          {!isShowForm && !isEditUser ? (
            <>
              {" "}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsShowForm(true)}
                  className="inline-flex items-center px-6 py-2 text-xs sm:text-sm leading-4 font-normal rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Add User
                </button>
              </div>
              <UserList setIsEditUser={setIsEditUser} />
            </>
          ) : (
            <AddOrEditUser
              isEditUser={isEditUser}
              setIsShowForm={setIsShowForm}
              setIsEditUser={setIsEditUser}
            />
          )}
        </div>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
