import React, { useState } from "react";

import "./App.scss";

import { Filter, UserList } from "./components";
import { FiltrationStateInterface } from "./types/FiltrationState";

const App = () => {
  const [
    filtrationState,
    setFiltrationState,
  ] = useState<FiltrationStateInterface>({
    name: "",
    lastname: "",
    age: "",
    male: true,
    female: true,
  });

  return (
    <div className="home">
      <Filter
        filtrationState={filtrationState}
        onChangeFiltrationState={setFiltrationState}
      />
      <UserList filtrationState={filtrationState} />
    </div>
  );
};

export default App;
