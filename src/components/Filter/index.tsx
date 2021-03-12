import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import { FiltrationStateInterface } from "../../types/FiltrationState";

interface FilterProps {
  filtrationState: FiltrationStateInterface;
  onChangeFiltrationState: Dispatch<SetStateAction<FiltrationStateInterface>>;
}

const Filter: FC<FilterProps> = ({
  filtrationState,
  onChangeFiltrationState,
}): JSX.Element => {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const element = event.target;
    if (element.type === "checkbox") {
      onChangeFiltrationState((prevState) => ({
        ...prevState,
        [element.name]: !prevState[element.name],
      }));
    } else {
      onChangeFiltrationState((prevState) => ({
        ...prevState,
        [element.name]: (element.type = element.value),
      }));
    }
  };

  return (
    <form className="filter">
      <div className="form-control">
        <label htmlFor="name">Name: </label>
        <input
          value={filtrationState.name}
          onChange={handleInput}
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div className="form-control">
        <label htmlFor="name">Last Name: </label>
        <input
          value={filtrationState.lastname}
          onChange={handleInput}
          type="text"
          id="lastname"
          name="lastname"
        />
      </div>
      <div className="form-control">
        <label htmlFor="age">Age: </label>
        <input
          value={filtrationState.age}
          onChange={handleInput}
          type="text"
          id="age"
          name="age"
        />
      </div>
      <div className="form-check">
        <label htmlFor="male">Male: </label>
        <input
          onChange={handleInput}
          value="male"
          type="checkbox"
          checked={filtrationState["male"]}
          id="male"
          name="male"
        />
      </div>
      <div className="form-check">
        <label htmlFor="female">Female: </label>
        <input
          onChange={handleInput}
          value="female"
          type="checkbox"
          checked={filtrationState["female"]}
          id="female"
          name="female"
        />
      </div>
    </form>
  );
};

export default Filter;
