import React from "react";
import ReactDOM from "react-dom";

import 'ts-polyfill/lib/es2015-promise';

import {App} from "./App";

ReactDOM.render(
  <App/>,
  document.getElementById(`app`)
);