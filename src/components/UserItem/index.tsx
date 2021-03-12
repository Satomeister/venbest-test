import React, { FC } from "react";

import { IUser } from "../../types/User";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }): JSX.Element => {
  return (
    <li className="users__item">
      <div>
        <span>name:</span> {user.name}
      </div>
      <div>
        <span>lastname:</span> {user.lastname}
      </div>
      <div>
        <span>age:</span> {user.age}
      </div>
      <div>
        <span>sex:</span> {user.sex}
      </div>
    </li>
  );
};

export default UserItem;
