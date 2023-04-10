import React, { useState } from "react";
import { Data } from "../../data/users_data";

const Users = () => {
  const [users, setUsers] = useState(Data);

  return (
    <div className="mt-4">
      <input
        className="bg-inherit mx-3 border-none outline-none text-white font-medium"
        placeholder="Find a user"
        type="text"
      />
      <hr className="my-3" />

      {users.map((user) => {
        const { name, id, img, messages } = user;
        return (
          <div
            key={id}
            className="flex p-4 hover:bg-slate-800 cursor-pointer duration-700 rounded"
          >
            <div>
              <img
                src={img}
                className="rounded-full h-12 w-12 ring-2 ring-white"
                alt=""
              />
            </div>
            <div className="text-white ml-4">
              <p className="text-xl font-semibold">{name}</p>
              <p className="">{messages}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
