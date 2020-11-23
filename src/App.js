
import React, { useState } from 'react';
import CSVHandler from "./csv"
import MyResponsiveRadar from "./chart"
import data from "./Assets/Campeonato.json"
import data2 from "./Assets/csvjson.json"
function App() {

  return (
    <div>
      <h3>Puesto para Web developer </h3>
      <CSVHandler data={data}/>
      <MyResponsiveRadar data={data2} />

    </div>
  );
}

export default App;