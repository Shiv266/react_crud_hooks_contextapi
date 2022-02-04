import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

const AddOrEditUser = ({ isEditUser, setIsShowForm, setIsEditUser }) => {
  const { user, handleUserData, addUser, updateUser, resetFormData } =
    useContext(GlobalContext);

  const handleSubmit = (e, id, user) => {
    e.preventDefault();
    if (isEditUser) {
      updateUser(id, user);
    } else {
      user.id = uuid();
      addUser(user);
    }
    setIsShowForm(false);
    setIsEditUser(false);
    resetFormData();
  };

  return (
    <div className="grid grid-col-1 gap-2 leading-8">
      <div className="col-span-1 mt-5">
        <h1 className="text-white rounded-lg text-center w-full bg-slate-600 font-medium">
          {isEditUser ? `Edit` : `Add`} User
        </h1>
      </div>
      <form>
        <div className="col-span-1">
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Enter user name..."
            className="focus:outline-none focus:ring-gray-500 focus:border-gray-500 placeholder-gray-700  px-3 py-2 shadow-sm  block w-full pl-3 text-sm  border border-gray-300 rounded-md"
            onChange={handleUserData}
          />
        </div>
        <div className="col-span-1 mt-2">
          <input
            type="text"
            name="mobile"
            value={user.mobile}
            placeholder="Enter user mobile..."
            onChange={handleUserData}
            className="focus:outline-none focus:ring-gray-500 focus:border-gray-500 placeholder-gray-700  px-3 py-2 shadow-sm  block w-full pl-3 text-sm  border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-1 mt-2">
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Enter user email..."
            onChange={handleUserData}
            className="focus:outline-none focus:ring-gray-500 focus:border-gray-500 placeholder-gray-700  px-3 py-2 shadow-sm  block w-full pl-3 text-sm  border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-1 mt-3">
          <button
            onClick={(e) => handleSubmit(e, user.id, user)}
            className="inline-flex items-center px-6 py-2 text-xs sm:text-sm leading-4 font-normal rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            {isEditUser ? `Save` : `Submit`}
          </button>
          {!isEditUser && (
            <button
              onClick={() => {
                setIsShowForm(false);
              }}
              type="button"
              className="inline-flex items-center ml-6 px-6 py-2 text-xs sm:text-sm leading-4 font-normal rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddOrEditUser;
