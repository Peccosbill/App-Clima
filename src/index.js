import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
//import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,

  document.getElementById("root")
);
