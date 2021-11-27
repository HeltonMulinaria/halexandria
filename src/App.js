import React from "react";
import { Button } from "reactstrap";
import Headers from "./Headers";

function App(props) {
  return (
    <div>
      <Headers />
      <Button color="danger">Danger!</Button>
    </div>
  );
}

export default App;
