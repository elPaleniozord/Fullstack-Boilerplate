import * as React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app">
        BoilerPlate
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(App);
