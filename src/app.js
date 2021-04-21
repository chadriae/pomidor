import ReactDOM from "react-dom";

import "bulma";

import Hello from "./components/hello.js";

ReactDOM.render(<Hello name={"Christophe"} />, document.querySelector("#app"));
