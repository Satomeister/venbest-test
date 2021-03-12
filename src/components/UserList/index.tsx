import React, { FC, useCallback, useEffect, useState } from "react";
import axios from "axios";

import { IUser } from "../../types/User";
import { UserItem } from "../index";
import { FiltrationStateInterface } from "../../types/FiltrationState";

interface UserListInterface {
  filtrationState: FiltrationStateInterface;
}

const UserList: FC<UserListInterface> = ({ filtrationState }): JSX.Element => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchGetUsers = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://venbest-test.herokuapp.com/");
      setUsers(data);
      setLoading(false);
    } catch (error) {}
  }, [setUsers]);

  useEffect(() => {
    fetchGetUsers();
  }, [fetchGetUsers]);

  useEffect(() => {
    const filteredUsers = users.filter((user) => {
      let res = true;
      Object.keys(filtrationState).forEach((key) => {
        if (key === "name" || key === "lastname") {
          if (
            !user[key]
              .toLowerCase()
              .includes(filtrationState[key].toLowerCase())
          ) {
            res = false;
          }
        } else if (key === "age") {
          if (filtrationState.age && +user.age !== +filtrationState.age) {
            res = false;
          }
        } else if (key === "male" || key === "female") {
          if (user.sex === "m" && !filtrationState.male) {
            res = false;
          } else if (user.sex === "f" && !filtrationState.female) {
            res = false;
          }
        }
      });
      return res;
    });
    setFilteredUsers(filteredUsers);
  }, [filtrationState, users]);

  return (
    <ul className="users">
      {!loading ? (
        filteredUsers.map((user, index) => {
          return (
            <UserItem key={index} user={user} /> // index in key is bad solution, but there is no id in user interface
          );
        })
      ) : (
        <p>loading...</p>
      )}
    </ul>
  );
};

export default UserList;
