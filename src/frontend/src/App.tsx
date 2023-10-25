import React from "react";
import { Button } from "antd";
import { getAllStudents } from "./client";

function App() {

  React.useEffect(() => {
    getAllStudents().then(res => res.json()).then(console.log);

  });

  return (
    <div className="App">
      <Button type={"primary"}>Universe</Button>
    </div>
  );
}

export default App;
