import React, { Component } from "react";

import "./styles/Header.css";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeaders from "./components/Header";
import AppBanner from "./components/Banner";
import AppProduct from "./components/Product";
// import AppBooktable from "./components/BookTable";
import { Container } from "react-bootstrap";

// class App extends Component
function App() {
  // render() {
  return (
    <div className="">
      <Container className="bg-dark" fluid>
        <AppHeaders />
        <AppBanner />
        <AppProduct />
      </Container>
    </div>
  );
}
// }

export default App;
